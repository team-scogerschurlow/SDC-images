// Update with your config settings.
  // module.exports = {
  //   development: {
  //     client: 'mysql',
  //     connection: {
  //       host: 'database',
  //       database: 'heroes',
  //       user:     'root',
  //       password: 'secret-33-sauce',
  //       port: '3306'
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

  module.exports = {
    development: {
      client: 'mysql',
      connection: {
        host: 'localhost',
        database: 'heroes',
        user:     'root',
        password: 'secret-33-sauce',
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

  // module.exports = {
  //   development: {
  //     client: 'mysql',
  //     connection: {
  //       host: '3306',
  //       database: 'heroes',
  //       user:     'root',
  //       password: 'secret-33-sauce'
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


