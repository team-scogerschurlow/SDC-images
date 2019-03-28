
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('listings', (table) => {
          table.increments('id').primary();
          table.string('name');
        }),

        knex.schema.createTable('pics', (table) => {
            table.increments('id').primary();
            table.string('url');
            table.integer('listings_id').unsigned()
              .references('listings.id');
        }) 
    ]);
  
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('listings'),
        knex.schema.dropTable('pics')
    ]);
  
};
