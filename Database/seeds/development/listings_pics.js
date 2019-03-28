const listingsData = require('../../listings.js');
const picsData = require('../../pics.js');


// exports.seed = function(knex, Promise) {
//   return knex(‘products’).del()
//   .then(() => {
//     return knex(‘merchants’).del();
//   })
//   .then(() => {
//     return knex(‘merchants’).insert(merchantsData);
//   })
//   .then(() => {
//     let productPromises = [];
//     productsData.forEach((product) => {
//       let merchant = product.merchant;
//       productPromises.push(createProduct(knex, product, merchant));
//     });
//     return Promise.all(productPromises);
//   });
// };
// const createProduct = (knex, product, merchant) => {
//   return knex(‘merchants’).where(‘name’, merchant).first()
//   .then((merchantRecord) => {
//     return knex(‘products’).insert({
//       name: product.name,
//       price: product.price,
//       merchant_id: merchantRecord.id
//     });
//   });
// };




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
        let listing = pic.listings_id;
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



     // Inserts seed entries
    //   return knex('table_name').insert([
    //     {id: 1, colName: 'rowValue1'},
    //     {id: 2, colName: 'rowValue2'},
    //     {id: 3, colName: 'rowValue3'}
    //   ]);
    // });
