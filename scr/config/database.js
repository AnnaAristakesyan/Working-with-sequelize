module.exports = {
    development: {
      username: 'posgres',
      password: '2107',
      database: 'sequelise_working',
      host: 'localhost',
      port: 5432,
      dialect: 'postgres',
    },
    test: {
      username: 'postgres',
      password: '2107',
      database: 'test_db_name',
      host: 'localhost',
      port: 5433,
      dialect: 'postgres',
    },
  };
  