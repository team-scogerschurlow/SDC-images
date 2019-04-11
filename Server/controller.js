var db = require ('../Database/index.js')


exports.retrievePics = function (req, res) {
    var id = req.params.id;
    db('pics').where('listings_id', id)
    .then(function(data) {
      res.send(data);
    })
    .catch(function(err) {
      console.log(err)
      res.status(500).send(err);
    })
}