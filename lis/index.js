const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/pics';
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });

module.exports = db;