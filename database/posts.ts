import { sql } from './connect';

export type Post = {
  id: number;
  postText: string;
  userId: number;
  postTitle: string;
  channelId: number;
  commentId: number;
};
export async function getPosts() {
  const posts = await sql<Post[]>`
SELECT * FROM posts;
`;
  return posts;
}
export async function getPostsById(id: number) {
  const [post] = await sql<Post[]>`
  SELECT * FROM posts WHERE id=${id}`;
  return post;
}
