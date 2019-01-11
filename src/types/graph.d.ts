export const typeDefs = ["type AddCommentResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  AddComment(postId: Int!, parentCommentId: Int, body: String!, level: Int!): AddCommentResponse!\n  DeleteComment(commentId: Int!): DeleteCommentResponse!\n  EditComment(commentId: Int!, body: String!): EditCommentResponse!\n  SendClap(postId: Int!): SendClapResponse!\n  UnClap(postId: Int!): SendClapResponse!\n  AddPost(category: Int!, title: String!, source: String, tags: [String], body: String!): AddPostResponse!\n  DeletePost(postId: Int!): DeletePostResponse!\n  EditPost(postId: Int!, category: Int!, title: String!, source: String, tags: [String], body: String!): EditPostResponse!\n  EmailSignIn(email: String!, password: String!): EmailSignInResponse!\n  EmailSignUp(email: String!, password: String!, nickName: String!, gender: String!, birthday: String!): EmailSignUpResponse!\n  FacebookConnect(firstName: String!, lastName: String!, nickName: String!, email: String, fbId: String!): FacebookConnectResponse!\n  GoogleConnect(firstName: String!, lastName: String!, nickName: String!, email: String, profilePhoto: String, googleId: String!): GoogleConnectResponse!\n}\n\ntype DeleteCommentResponse {\n  ok: Boolean\n  error: String\n}\n\ntype EditCommentResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype GetCommentsByPostIdResponse {\n  ok: Boolean!\n  error: String\n  comments: [Comment]\n}\n\ntype Query {\n  GetCommentsByPostId(postId: Int!): GetCommentsByPostIdResponse!\n  GetPostById(postId: Int!): GetPostByIdResponse!\n  GetPostsByPage(page: Int!): GetPostsByPageResponse!\n  GetMyProfile: GetMyProfileResponse!\n}\n\ntype Comment {\n  id: Int!\n  body: String!\n  userId: Int\n  user: User!\n  postId: Int\n  post: Post!\n  parentComment: Comment\n  childrenComments: [Comment]\n  level: Int!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype SendClapResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Like {\n  id: Int!\n  senderId: Int\n  sender: User!\n  receiverId: Int\n  receiver: User!\n  postId: Int\n  post: Post\n  createdAt: String!\n  updatedAt: String\n}\n\ntype UnClapResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype AddPostResponse {\n  ok: Boolean!\n  error: String\n  postId: Int\n}\n\ntype DeletePostResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype EditPostResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype GetPostByIdResponse {\n  ok: Boolean!\n  error: String\n  post: Post\n  isLiked: Boolean\n  isMine: Boolean\n}\n\ntype GetPostsByPageResponse {\n  ok: Boolean!\n  error: String\n  posts: [Post]!\n  maxPage: Int!\n}\n\ntype Post {\n  id: Int!\n  category: Int!\n  title: String!\n  source: String!\n  body: String!\n  userId: Int!\n  user: User!\n  view: Int!\n  tags: [String]\n  createdAt: String!\n  updatedAt: String\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype FacebookConnectResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype GetMyProfileResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype GoogleConnectResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype User {\n  id: Int!\n  email: String\n  verifiedEmail: Boolean!\n  nickName: String!\n  birthday: String\n  gender: String\n  password: String\n  profilePhoto: String\n  fbId: String\n  googleId: String\n  posts: [Post]\n  likesAsSender: [Like]\n  likesAsReceiver: [Like]\n  likesAsReceiverCount: Int\n  comments: [Comment]\n  cinePoint: Int!\n  following: [User]\n  followers: [User]\n  followersCount: Int\n  followingCount: Int\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  verified: Boolean!\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  GetCommentsByPostId: GetCommentsByPostIdResponse;
  GetPostById: GetPostByIdResponse;
  GetPostsByPage: GetPostsByPageResponse;
  GetMyProfile: GetMyProfileResponse;
}

export interface GetCommentsByPostIdQueryArgs {
  postId: number;
}

export interface GetPostByIdQueryArgs {
  postId: number;
}

export interface GetPostsByPageQueryArgs {
  page: number;
}

export interface GetCommentsByPostIdResponse {
  ok: boolean;
  error: string | null;
  comments: Array<Comment> | null;
}

export interface Comment {
  id: number;
  body: string;
  userId: number | null;
  user: User;
  postId: number | null;
  post: Post;
  parentComment: Comment | null;
  childrenComments: Array<Comment> | null;
  level: number;
  createdAt: string;
  updatedAt: string | null;
}

export interface User {
  id: number;
  email: string | null;
  verifiedEmail: boolean;
  nickName: string;
  birthday: string | null;
  gender: string | null;
  password: string | null;
  profilePhoto: string | null;
  fbId: string | null;
  googleId: string | null;
  posts: Array<Post> | null;
  likesAsSender: Array<Like> | null;
  likesAsReceiver: Array<Like> | null;
  likesAsReceiverCount: number | null;
  comments: Array<Comment> | null;
  cinePoint: number;
  following: Array<User> | null;
  followers: Array<User> | null;
  followersCount: number | null;
  followingCount: number | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface Post {
  id: number;
  category: number;
  title: string;
  source: string;
  body: string;
  userId: number;
  user: User;
  view: number;
  tags: Array<string> | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface Like {
  id: number;
  senderId: number | null;
  sender: User;
  receiverId: number | null;
  receiver: User;
  postId: number | null;
  post: Post | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface GetPostByIdResponse {
  ok: boolean;
  error: string | null;
  post: Post | null;
  isLiked: boolean | null;
  isMine: boolean | null;
}

export interface GetPostsByPageResponse {
  ok: boolean;
  error: string | null;
  posts: Array<Post>;
  maxPage: number;
}

export interface GetMyProfileResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}

export interface Mutation {
  AddComment: AddCommentResponse;
  DeleteComment: DeleteCommentResponse;
  EditComment: EditCommentResponse;
  SendClap: SendClapResponse;
  UnClap: SendClapResponse;
  AddPost: AddPostResponse;
  DeletePost: DeletePostResponse;
  EditPost: EditPostResponse;
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
  FacebookConnect: FacebookConnectResponse;
  GoogleConnect: GoogleConnectResponse;
}

export interface AddCommentMutationArgs {
  postId: number;
  parentCommentId: number | null;
  body: string;
  level: number;
}

export interface DeleteCommentMutationArgs {
  commentId: number;
}

export interface EditCommentMutationArgs {
  commentId: number;
  body: string;
}

export interface SendClapMutationArgs {
  postId: number;
}

export interface UnClapMutationArgs {
  postId: number;
}

export interface AddPostMutationArgs {
  category: number;
  title: string;
  source: string | null;
  tags: Array<string> | null;
  body: string;
}

export interface DeletePostMutationArgs {
  postId: number;
}

export interface EditPostMutationArgs {
  postId: number;
  category: number;
  title: string;
  source: string | null;
  tags: Array<string> | null;
  body: string;
}

export interface EmailSignInMutationArgs {
  email: string;
  password: string;
}

export interface EmailSignUpMutationArgs {
  email: string;
  password: string;
  nickName: string;
  gender: string;
  birthday: string;
}

export interface FacebookConnectMutationArgs {
  firstName: string;
  lastName: string;
  nickName: string;
  email: string | null;
  fbId: string;
}

export interface GoogleConnectMutationArgs {
  firstName: string;
  lastName: string;
  nickName: string;
  email: string | null;
  profilePhoto: string | null;
  googleId: string;
}

export interface AddCommentResponse {
  ok: boolean;
  error: string | null;
}

export interface DeleteCommentResponse {
  ok: boolean | null;
  error: string | null;
}

export interface EditCommentResponse {
  ok: boolean;
  error: string | null;
}

export interface SendClapResponse {
  ok: boolean;
  error: string | null;
}

export interface AddPostResponse {
  ok: boolean;
  error: string | null;
  postId: number | null;
}

export interface DeletePostResponse {
  ok: boolean;
  error: string | null;
}

export interface EditPostResponse {
  ok: boolean;
  error: string | null;
}

export interface EmailSignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface EmailSignUpResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface FacebookConnectResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface GoogleConnectResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface UnClapResponse {
  ok: boolean;
  error: string | null;
}

export interface Verification {
  id: number;
  target: string;
  payload: string;
  key: string;
  verified: boolean;
  createdAt: string;
  updatedAt: string | null;
}
