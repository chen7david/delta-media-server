const router = require('express-promise-router')()
const VideoController = require('./../controllers/VideoController')
const { upload, file } = require('./../middleware')
router.route('/video/upload')
    .get(VideoController.getVideoUpload)
    .post(upload.single('movie'), VideoController.postVideoUpload)


module.exports = router