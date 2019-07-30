const db  = require('./index.js');
const Schema = require('./Schema.js');
const fs = require('fs')

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
    return id + ',' + randomElement(listings) + ',' + randomUrls(urls).toString(',')
  };
  
  function fillArray(a, b) {
    const arr = []
    for(i = a; i <= b; i ++) {
      arr.push(random(i+1))
    }
    return arr.join('\n');
  };

  fs.appendFileSync(__dirname + '/data.csv', `${fillArray(0, 1000000)}`);
  fs.appendFileSync(__dirname + '/data.csv', `${fillArray(1000000, 2000000)}`);
  fs.appendFileSync(__dirname + '/data.csv', `${fillArray(2000000, 3000000)}`);
  fs.appendFileSync(__dirname + '/data.csv', `${fillArray(3000000, 4000000)}`);
  fs.appendFileSync(__dirname + '/data.csv', `${fillArray(4000000, 5000000)}`);
  fs.appendFileSync(__dirname + '/data.csv', `${fillArray(5000000, 6000000)}`);
  fs.appendFileSync(__dirname + '/data.csv', `${fillArray(6000000, 7000000)}`);
  fs.appendFileSync(__dirname + '/data.csv', `${fillArray(7000000, 8000000)}`);
  fs.appendFileSync(__dirname + '/data.csv', `${fillArray(8000000, 9000000)}`);
  fs.appendFileSync(__dirname + '/data.csv', `${fillArray(9000000, 9999999)}`);



