exports.up = async (sql) => {
  await sql`CREATE TABLE users(
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_name varchar(50) NOT NULL UNIQUE,
    password_hash varchar(70) NOT NULL UNIQUE,
    email varchar(90) NOT NULL UNIQUE
  );`;
};

exports.down = async (sql) => {
  await sql`DROP TABLE users`;
};
