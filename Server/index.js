const heroesRouter = require('./router.js')

// const baseUrl = 'http://ec2-34-209-162-9.us-west-2.compute.amazonaws.com:3000/heroes/60'

const express = require('express');

const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use('/:id', express.static('./Client/Dist'))
app.use('/', heroesRouter)

//app.get('/api/:id' function(req, res) )

app.listen(port, () => {
    console.log('listening on port ', port)
})