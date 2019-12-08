const router = require('express-promise-router')()
const VideoController = require('./../controllers/VideoController')
const { upload, file } = require('./../middleware')
router.route('/video/upload')
    .get(VideoController.getVideoUpload)
    .post(upload.fields([
        { name: 'video', maxCount: 1 },
        { name: 'thumbnail', maxCount: 1 },
        { name: 'cover', maxCount: 1 }
    ]), VideoController.postVideoUpload)

router.route('/video/movies')
    .get(VideoController.getVideos)
module.exports = router