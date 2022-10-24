exports.up = async (sql) => {
  await sql`CREATE TABLE posts(
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    channel_id integer REFERENCES channels(id),
    user_id integer REFERENCES users (id),
    comment_id integer REFERENCES comments(id)
  );`;
};

exports.down = async (sql) => {
await sql`DROP TABLE posts`;
};
