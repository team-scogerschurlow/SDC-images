/*

migrations

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


seeds 


const listingsData = require('../../listings.js');
const picsData = require('../../pics.js');


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pics').del()
    .then(() => {
      return knex('listings').del()
    })
    .then(() => {
      return knex('listings').insert(listingsData);

    })
    .then(() =>{
      let picsPromises = [];
      picsData.forEach((pic) => {
        let listing = pic.listing;
        picsPromises.push(createPic(knex, pic, listing));
      });
      return Promise.all(picsPromises);
    });
};

const createPic = (knex, pic, listing) => {
  return knex('listings').where('name', listing).first()
  .then( (listingRecord) => {
    return knex('pics').insert({
      url: pic.url,
      listings_id: listingRecord
    })

  })
}





// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('pics').del()
//     .then(() => {
//       return knex('listings').del()
//     })
//     .then(() => {
//       return knex('listings').insert(listingsData);

//     })
//     .then(() =>{
//       let picsPromises = [];
//       picsData.forEach((pic) => {
//         let listing = pic.listings_id;
//         picsPromises.push(createPic(knex, pic, listing));
//       });
//       return Promise.all(picsPromises);
//     });
// };

// const createPic = (knex, pic, listing) => {
//   return knex('listings').where('name', listing).first()
//   .then( (listingRecord) => {
//     return knex('pics').insert({
//       url: pic.url,
//       listings_id: listingRecord
//     })

//   })
// }

*/