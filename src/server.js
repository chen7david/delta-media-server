const express = require('express')
const app = express()
const server = require('http').createServer(app)
const { APP_PORT } = require('./config')
const port = APP_PORT || 4000
const { VideoRoutes } = require('./routes')
const nunjucks = require('nunjucks')

// NUNJUCKS
nunjucks.configure(__dirname + '/views', {
    autoescape: true,
    express: app
});

app.set('view engine', 'njk');

// SET PUBLIC STATIC DIRECTORIES
app.use('/media', express.static(__dirname + '/media/'))
app.use('/assets',express.static(__dirname + '/public/assets'))

// Routes

app.use(VideoRoutes)


server.listen(port, () => console.log(`running at http://localhost:${port}`))


