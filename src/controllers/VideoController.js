// file.delete('video/Avatar.en.vtt')
const { Movie, Subtitle } = require('./../models')
const { upload, file } = require('./../middleware')

module.exports = {
    getVideos: async(req, res) => {
        const movies = await Movie.query()
        res.render('movies.html', {movies})
    },
    getVideoUpload: (req, res) => {
        res.render('index.html')
    },
    postVideoUpload: async (req, res) => {
        const { filename, mimetype } = req.file
        const { title, description, duration } = req.body
        const movie = await Movie.query().insert({
            fileName: filename,
            mimeType: mimetype,
            title, 
            description, 
            duration
        })
        res.status(200).json(movie)
    }

}