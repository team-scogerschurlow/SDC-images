const db  = require('./index.js');
const Schema = require('./Schema.js');

let randomElement = function(array){
    var rand = array[(Math.random() * array.length) | 0];
    return rand;
  };
  
  let urls = [
    'https://i.imgur.com/RV6dmw0l.jpg', 'https://i.imgur.com/nAbHZZjl.jpg', 'https://i.imgur.com/Qu9ULMql.jpg','https://i.imgur.com/tEhJD7Rl.jpg', 'https://i.imgur.com/ZK6kT5Pl.jpg', 'https://i.imgur.com/cguSRDzl.jpg', 'https://i.imgur.com/oN83yWml.jpg','https://i.imgur.com/1zYntI7l.jpg','https://i.imgur.com/WfMKGrXl.jpg'
  ];

  let listings = ['funHouse', 'dirtyHouse', 'thisHouse', 'houseHose'];

  let randomUrls = function(arrayUrls){
    let result = [];
    result.push(randomElement(arrayUrls));
    result.push(randomElement(arrayUrls));
    result.push(randomElement(arrayUrls));
    result.push(randomElement(arrayUrls));
    result.push(randomElement(arrayUrls));
    return result;
  }

  let random = function (id){
    return obj = { 
      id: id,
      listing: randomElement(listings),
      url: randomUrls(urls)
    }
  };
  
  function fillArray() {
    const arr = []
    for(i = 0; i <= 100000; i ++) {
      arr.push(random(i+1))
    }
    return arr;
  };

const insertItems = function() {
    const items = fillArray();
    const promises = [];
    for (const item of items) {
        promises.push(Schema.insertMany(item, (err, res) => {
          if (err) {
            console.log(err);
          } else {
            console.log(res);
          }
        }));
    };
    Promise.all(promises).then(() => db.disconnect());
};

insertItems();



// csv file with name, urls schema 
// fs.appendSync 

// fs.appendFile('filename.csv', fillArray(), (err) => {
//     if (err) console.error('Couldn\'t append the data');
//     console.log('The data was appended to file!');
// });

// const insertSampleBlogs = function() {
//   Blog.create(samplePosts)
//     .then(() => db.disconnect());
// };

// insertSampleBlogs();