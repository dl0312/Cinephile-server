import { Resolvers } from "../../../types/resolvers";
import Post from "../../../entities/Post";

const resolvers: Resolvers = {
  Query: {
    GetPostsByPage: async (_, args, { req }) => {
      const { page } = args;
      const post_per_page = 20;
      try {
        const maxPage = Math.ceil((await Post.find()).length / post_per_page);
        const posts = await Post.find({
          order: {
            createdAt: "DESC"
          },
          skip: page === 1 ? 0 : post_per_page * (page - 1),
          take: post_per_page,
          cache: true,
          relations: ["user"]
        });
        if (posts) {
          return {
            ok: true,
            error: null,
            posts,
            maxPage
          };
        } else {
          return {
            ok: false,
            error: "has no posts",
            posts: null,
            maxPage: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          posts: null,
          maxPage: null
        };
      }
    }
  }
};

export default resolvers;
