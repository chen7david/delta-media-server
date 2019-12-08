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
        // console.log({files:req.files})
        // console.log({body:req.body})

        const { video, cover, thumbnail } = req.files
        const { title, description, duration } = req.body
        const movie = await Movie.query().insert({
            fileName: video[0].filename,
            mimeType: video[0].mimetype,
            size: video[0].size,
            cover: cover[0].filename,
            poster: thumbnail[0].filename,
            title, 
            description
        })
        
        backURL=req.header('Referer') || '/'
        res.redirect(backURL)
        res.status(200).json(req.files)
    }

}