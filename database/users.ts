import { sql } from './connect';

export type User = {
  id: number;
  userName: string;
  password: string;
  email: string;
};
export async function getUsers() {
  const users = await sql<User[]>`
SELECT * FROM users;
`;
  return users;
}
export async function getUsersById(id: number) {
  const [user] = await sql<User[]>`
  SELECT * FROM users WHERE id=${id}`;
  return user;
}
