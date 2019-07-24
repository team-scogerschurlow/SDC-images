const heroesRouter = require('./router.js')
const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3331;

app.use(cors())
app.use(bodyParser.json())
// app.use(express.static('./Client/Dist'))

app.use('/:id', express.static('./Client/Dist'))
app.use('/', heroesRouter)

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/../client/dist/index.html'))
//  })

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/../client/dist/index.html'))
//  })
app.listen(port, () => {
    console.log('listening on port ', port)
})