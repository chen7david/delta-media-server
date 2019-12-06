const express = require('express')
const app = express()
const server = require('http').createServer(app)
const { upload, file } = require('./middleware')
const { APP_PORT } = require('./config')
const { Movie, Subtitle } = require('./models')
const port = APP_PORT || 4000

app.use('/media', express.static('./src/media/'))
app.use('/assets',express.static(__dirname + '/assets'))

// file.delete('video/Avatar.en.vtt')

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