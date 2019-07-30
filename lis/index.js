const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost:27017/pics';
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });

module.exports = db;

// mongoimport --host=127.0.0.1 -d database_name -c collection_name --type csv --file csv_location --headerline
