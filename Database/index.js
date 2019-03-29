const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile.js')[env]
const knex = require('knex')

module.exports = knex(config)


// db = require 'indexedDB.js'



// const mysql= require('mysql');

// var knex = require('knex')({
//     client: 'mysql',
//     version: '5.7',
//     connection: {
//       host : '127.0.0.1',
//       user : 'root',
//       database : 'heroes'
//     }
//   });

// var connection = mysql.createConnection({
//     database: 'heroes',
//     user: 'root'
// });

// connection.connect(function(err){
//     if(err) {
//         console.error('error connection: ' + err.stack);
//         return;
//     }
//     console.log('connected as id ' + connectionthreadID);
// });


// module.exports = connection;


// psql <dbname> (to access DB)
// \l (shows all databases)
// \c <database name> (connects to database)
// \dt (shows all tables)
// TABLE <tablename> (shows table)
// \q quits out of psql\

// knex migrate:latest  (run this in reg terminal to create new schema)

// knex seed:make merchants_products --env development (run this in reg terminal to create new seed data/populate tables)



// const listingsData = require('../../listings.js');
// const picsData = require('../../pics.js');


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
//         let listing = pic.listing;
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
//       listings_id: listingRecord.id
//     })

//   })
// }

