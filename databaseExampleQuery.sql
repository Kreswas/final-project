 CREATE TABLE users(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_name varchar(50) NOT NULL UNIQUE,
  password_hash varchar(70) NOT NULL UNIQUE,
  email varchar(90) NOT NULL UNIQUE,
);


CREATE TABLE channels(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  channel_name varchar(30) NOT NULL,
  description varchar(200) NOT NULL,
  user_id integer REFERENCES users(id),
  post_id integer REFERENCES posts(id)
);
INSERT INTO channels(channel_name)
VALUES
  ('Place Holder 1'),
  ('Place Holder 2'),
  ('Place Holder 3'),
  ('Place Holder 4'),
  ('Place Holder 5');
  SELECT * FROM channels;


CREATE TABLE posts(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  channel_id integer REFERENCES channels(id),
  user_id integer REFERENCES users (id),
  comment_id integer REFERENCES comments(id)
);


  CREATE TABLE comments(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id integer REFERENCES users(id),
  post_id integer REFERENCES posts(id)
);
