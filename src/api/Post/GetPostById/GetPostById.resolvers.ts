import { Resolvers } from "../../../types/resolvers";
// import {
//   GetPostByIdResponse,
//   GetPostByIdQueryArgs
// } from "../../../types/graph";
import Post from "../../../entities/Post";
import Like from "../../../entities/Like";
import User from "../../../entities/User";

const resolvers: Resolvers = {
  Query: {
    GetPostById: async (_, args, { req }) => {
      const { postId } = args;
      const user: User = req.user;
      try {
        const post = await Post.findOne(
          { id: postId },
          {
            relations: [
              "user",
              "comments",
              "comments.user",
              "comments.childrenComments",
              "comments.childrenComments.user"
            ]
          }
        );
        if (post) {
          post.view += 1;
          post.save();
          const comments = [];
          post.comments = post.comments;
          const Comments = ({ items }) => {
            return items.map(item => {
              const commentTemp = post.comments.find(
                comment => comment.id === item.id
              );
              if (commentTemp.childrenComments.length > 0) {
                comments.push(commentTemp);
                Comments({ items: commentTemp.childrenComments });
              } else {
                comments.push(commentTemp);
              }
            });
          };
          post.comments.forEach(comment => {
            if (comment.level === 1) {
              comments.push(comment);
              Comments({ items: comment.childrenComments });
            }
          });
          // comments = [...post.comments];
          post.comments = comments;
          if (user) {
            if (user.id === post.user.id) {
              return {
                ok: true,
                error: null,
                post,
                isLiked: true,
                isMine: true
              };
            } else {
              const isLiked = await Like.findOne({
                postId,
                senderId: user.id
              });
              if (isLiked) {
                return {
                  ok: true,
                  error: null,
                  post,
                  isLiked: true,
                  isMine: false
                };
              } else {
                return {
                  ok: true,
                  error: null,
                  post,
                  isLiked: false,
                  isMine: false
                };
              }
            }
          } else {
            return {
              ok: true,
              error: null,
              post,
              isLiked: false,
              isMine: false
            };
          }
        } else {
          return {
            ok: false,
            error: "Have no post with this ID",
            post: null,
            isLiked: null,
            isMine: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          post: null,
          isLiked: null,
          isMine: null
        };
      }
    }
  }
};

export default resolvers;
