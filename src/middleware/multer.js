const multer  = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        // cb(null, 'src/media/');
        const images = ['image/jpeg','image/png']
        if (file.mimetype === 'audio/mp3') {
            cb(null, 'src/media/audio')
          } else if (file.mimetype === 'video/mp4') {
            cb(null, 'src/media/video')
          } else if (images.includes(file.mimetype)) {
            cb(null, 'src/media/image')
          } else if (file.mimetype === 'application/pdf') {
            cb(null, 'src/media/pdf')
          }else {
            console.log(file.mimetype)
            cb({ error: 'Mime type not supported' })
          }
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

module.exports = multer({ storage: storage })