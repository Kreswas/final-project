import { sql } from './connect';

export type Channel = {
  id: number;
  channelName: string;
  description: string;
  postId: number;
  userId: number;
};
export async function getChannels() {
  const channels = await sql<Channel[]>`
SELECT * FROM channels;
`;
  return channels;
}
export async function getChannelsById(id: number) {
  const [channel] = await sql<Channel[]>`
  SELECT * FROM channels WHERE id=${id}`;
  return channel;
}
