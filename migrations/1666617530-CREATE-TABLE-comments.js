exports.up = async (sql) => {
  await sql`CREATE TABLE comments(
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id integer REFERENCES users(id),
    post_id integer REFERENCES posts(id)
  );`;
};

exports.down = async (sql) => {
await sql`DROP TABLE comments`;
};
