const fs = require('fs');

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
  };

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

  fs.appendFileSync(__dirname + '/dataP.csv', `${fillArray(0, 1000000) + '\n'}`);
  fs.appendFileSync(__dirname + '/dataP.csv', `${fillArray(1000001, 2000000) + '\n'}`);
  fs.appendFileSync(__dirname + '/dataP.csv', `${fillArray(2000001, 3000000) + '\n'}`);
  fs.appendFileSync(__dirname + '/dataP.csv', `${fillArray(3000001, 4000000) + '\n'}`);
  fs.appendFileSync(__dirname + '/dataP.csv', `${fillArray(4000001, 5000000) + '\n'}`);
  fs.appendFileSync(__dirname + '/dataP.csv', `${fillArray(5000001, 6000000) + '\n'}`);
  fs.appendFileSync(__dirname + '/dataP.csv', `${fillArray(6000001, 7000000) + '\n'}`);
  fs.appendFileSync(__dirname + '/dataP.csv', `${fillArray(7000001, 8000000) + '\n'}`);
  fs.appendFileSync(__dirname + '/dataP.csv', `${fillArray(8000001, 9000000) + '\n'}`);
  fs.appendFileSync(__dirname + '/dataP.csv', `${fillArray(9000001, 10000000)}`);



