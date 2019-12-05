const app = require('express')()
const server = require('http').createServer(app)
const { APP_PORT } = require('./config')
const port = APP_PORT || 4000





server.listen(port, () => console.log(`running at http://localhost:${port}`))