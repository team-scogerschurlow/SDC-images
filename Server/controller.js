// var axios = require('axios');
var db = require ('../Database/index.js')

// const retrieveListing = 

exports.retrievePics = function (req, res) {
    var id = req.params.id;
    db('pics').where('listings_id', id)
    .then(function(data) {
      res.send(data);
    })
    .catch(function(err) {
      res.status(500).send(err);
    })
}