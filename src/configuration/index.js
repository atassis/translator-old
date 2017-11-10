const conf = {
  development: true,
  port: 3000,
  secret: 'hehey',
  db: {
    connection: {
      host: 'db',
      user: 'root',
      password: 'privet',
      database: 'temp',
    },
  },
};

module.exports = conf;
