const channels = [
  'Place Holder 1',
  'Place Holder 3',
  'Place Holder 2',
  'Place Holder 4',
  'Place Holder 5',
];

exports.up = async (sql) => {
  await sql`INSERT INTO channels ${sql(channels, 'channel_name')}`;
};

exports.down = async (sql) => {
  for (const channel of channels) {
    await sql`
    DELETE FROM
    channels
    WHERE
    channel_name=${channel.channel_name}`;
  }
};
