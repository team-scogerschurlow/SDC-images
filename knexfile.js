// Update with your config settings.
  module.exports = {
    development: {
      client: 'mysql',
      connection: {
        host: 'localhost',
        database: 'heroes',
        user:     'root',
        password: '123',
        port: '3306'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  };

// LOCAL KNEX FILE

  // module.exports = {
  //   development: {
  //     client: 'mysql',
  //     connection: {
  //       host: 'localhost',
  //       database: 'heroes',
  //       user:     'root',
  //       password: ''
  //     },
  //     pool: {
  //       min: 2,
  //       max: 10
  //     },
  //     migrations: {
  //       tableName: 'knex_migrations'
  //     }
  //   }
  // };




