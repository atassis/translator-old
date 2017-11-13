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

const environment = process.env;
if (environment.DB_URL) {
  conf.db.connection = environment.DB_URL;
}
module.exports = conf;
