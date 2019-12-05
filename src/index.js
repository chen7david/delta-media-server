const express = require('express')
const app = express()
const server = require('http').createServer(app)
const { APP_PORT } = require('./config')
const { Movie, Subtitle } = require('./models')
const port = APP_PORT || 4000

var multer  = require('multer')
const path = require('path')
var fs = require('fs')

app.use('/public', express.static('public/'))
app.use('/assets',express.static(__dirname + '/assets'))

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'src/media/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage: storage })




app.get('/upload/movie', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})


app.post('/upload/movie', upload.single('movie'), async (req, res) => {
    const { filename, mimetype} = req.file
    const { title, description, duration } = req.body
    const movie = await Movie.query().insert({
        fileName: filename,
        mimeType: mimetype,
        title, 
        description, 
        duration
    })
    res.status(200).json(movie)
})

app.delete('/upload/movie/', upload.single('movie'), async (req, res) => {
    const { filename, mimetype} = req.file
    const { title, description, duration } = req.body
    const movie = await Movie.query().insert({
        fileName: filename,
        mimeType: mimetype,
        title, 
        description, 
        duration
    })
    res.status(200).json(movie)
})


server.listen(port, () => console.log(`running at http://localhost:${port}`))