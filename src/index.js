const express = require('express')
const app = express()
const server = require('http').createServer(app)
const { APP_PORT } = require('./config')
const port = APP_PORT || 4000

// app.use('/public', express.static('public/'))
app.use('/assets',express.static(__dirname + '/assets'))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})


server.listen(port, () => console.log(`running at http://localhost:${port}`))