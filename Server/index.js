const heroesRouter = require('./router.js')


const express = require('express');

const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(express.static('./Client/Dist'))
app.use('/', heroesRouter)

//app.get('/api/:id' function(req, res) )

app.listen(port, () => {
    console.log('listening on port ', port)
})