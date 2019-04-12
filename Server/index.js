const heroesRouter = require('./router.js')
const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors())
app.use(bodyParser.json())
app.use('/:id', express.static('./Client/Dist'))
app.use('/', heroesRouter)

app.listen(port, () => {
    console.log('listening on port ', port)
})