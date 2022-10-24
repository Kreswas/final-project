exports.up = async (sql) => {
  await sql`CREATE TABLE channels(
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    channel_name varchar(30) NOT NULL,
    description varchar(200) NOT NULL,
    user_id integer REFERENCES users(id),
    post_id integer REFERENCES posts(id)
  );`;
};

exports.down = async (sql) => {
  await sql`DROP TABLE channels`;
};
