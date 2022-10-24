import { sql } from './connect';

export type Comment = {
  id: number;
  commentText: string;
  postId: number;
  userId: number;
};
export async function getComments() {
  const comments = await sql<Comment[]>`
SELECT * FROM comments;
`;
  return comments;
}
export async function getCommentsById(id: number) {
  const [comment] = await sql<Comment[]>`
  SELECT * FROM comments WHERE id=${id}`;
  return comment;
}
