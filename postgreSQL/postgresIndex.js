const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4441;
const db = require('./connect');

app.use('/:id', express.static( __dirname + '/../client/dist'));
app.use(bodyParser.json());

app.get('/images/:id', db.retrievePics);

app.listen(port, ()=> {
  console.log(`listening on port ${port}`)
});