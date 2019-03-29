var makePics = function (num) {
    var total = (num + 1) ;
    theCount = 1;
    var countex = 1;
    var countbe = 1;
    var countba = 1;
    var countli = 1;
    var countki = 1;
    var picresults = [];
    var exterior =['https://i.imgur.com/RV6dmw0.jpg',
        'https://i.imgur.com/5BZugTu.jpg',
        'https://i.imgur.com/M4YeUei.jpg',
        'https://i.imgur.com/wHBKAeA.jpg',
        'https://i.imgur.com/XDFFKh2.jpg',
        'https://i.imgur.com/pxmMstn.jpg',
        'https://i.imgur.com/VXRQuu6.jpg',
        'https://i.imgur.com/aMrN6ik.jpg'
        ];
    var bedroom =['https://i.imgur.com/oN83yWm.jpg',
        'https://i.imgur.com/BXWwCKd.jpg',
        'https://i.imgur.com/qn4IAdn.jpg',
        'https://i.imgur.com/zivAg0u.jpg',
        'https://i.imgur.com/RfC6YRb.jpg',
        'https://i.imgur.com/XdYTsQE.jpg',
        'https://i.imgur.com/jhBlrQ6.jpg'
    ];
    var bathroom =['https://i.imgur.com/nAbHZZj.jpg',
        'https://i.imgur.com/6biUlDF.jpg',
        'https://i.imgur.com/MiHmdOy.jpg',
        'https://i.imgur.com/zstzmyJ.jpg',
        'https://i.imgur.com/f0BG76c.jpg',
        'https://i.imgur.com/HhM7YQY.jpg'
        ];
    var living =['https://i.imgur.com/ZK6kT5P.jpg',
        'https://i.imgur.com/wvSeGzm.jpg',
        'https://i.imgur.com/JdPvBKG.jpg',
        'https://i.imgur.com/rNdvMB6.jpg',
        'https://i.imgur.com/xfNXg6a.jpg',
        'https://i.imgur.com/eLYnzVi.jpg',
        'https://i.imgur.com/SJAz26X.jpg',
        'https://i.imgur.com/gIzIpil.jpg'
    ];
    var kitchen =['https://i.imgur.com/Qu9ULMq.jpg',
    'https://i.imgur.com/jzuKghw.jpg',
    'https://i.imgur.com/WStOprA.jpg',
    'https://i.imgur.com/UfkCNyI.jpg',
    'https://i.imgur.com/cLpJWYR.jpg',
    'https://i.imgur.com/xNcuCqZ.jpg'
    ];
    // var houses = house[Math.floor(Math.random()*house.length)];
    // var words = word[Math.floor(Math.random()*word.length)];

    for (var i = 0; i < num; i++) {
        if (countex < total) {
        var ext = exterior[Math.floor(Math.random()*exterior.length)];
        picresults.push({ id: theCount, url: ext, listings_id: countex})
        countex++
        theCount++
        }
    }

    for (var j = 0; j < num; j++) {
        if (countbe < total) {
        var bed = bedroom[Math.floor(Math.random()*bedroom.length)];
        picresults.push({ id: theCount, url: bed, listings_id: countbe })
        countbe++
        theCount++
        }
    }
    for (var k = 0; k < num; k++) {
        if (countba < total) {
        var bath = bathroom[Math.floor(Math.random()*bathroom.length)];
        picresults.push({ id: theCount, url: bath, listings_id: countba })
        countba++
        theCount++
        }
    }
    for (var l = 0; l < num; l++) {
        if (countli < total) {
        var liv = living[Math.floor(Math.random()*living.length)];
        picresults.push({ id: theCount, url:liv, listings_id: countli })
        countli++
        theCount++
        }
    }
    for (var g = 0; g < num; g++) {
        if (countki < total) {
        var kit = kitchen[Math.floor(Math.random()*kitchen.length)];
        picresults.push({ id: theCount, url:kit, listings_id: countki })
        countki++
        theCount++
        }
    }
    console.log(JSON.stringify(picresults));

}

makePics(100);