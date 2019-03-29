

var makeListings = function (num) {
    var total = num + 1;
    var count = 1;
    var results = [];
    var house = ['House', 'Room', 'Apartment', 'Castle', 'Dungeon', 'TreeHouse', 'Cottage', 'Hammock', 'Tent', 'Dumpster', 'Flowerbed'];
    var word = ['Fun', 'Dim', 'Flop', 'Fabulous', 'Immaculate', 'Dirty', 'Hazardous', 'Silly', 'Turnt', 'Quaint', 'Smelly', 'Fragrant', 'Glorious', 'Wonderful', 'Lively']
    // var houses = house[Math.floor(Math.random()*house.length)];
    // var words = word[Math.floor(Math.random()*word.length)];

    for (var i = 0; i < num; i++) {
        if (count < total) {
        var houses = house[Math.floor(Math.random()*house.length)];
        var words = word[Math.floor(Math.random()*word.length)];
        results.push({ id: count, name: words+' '+houses })
        count++
        }
    }
    console.log(JSON.stringify(results));
   
}

makeListings(100);