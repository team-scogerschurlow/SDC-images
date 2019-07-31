const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const picsSchema = new mongoose.Schema({
  id: Number,
  listing: String,
  url: Array
});

const Pics = mongoose.model('Pics', picsSchema, 'Picz');

module.exports = Pics;




