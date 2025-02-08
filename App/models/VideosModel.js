const mongoose = require('mongoose');
require('../config');

const videoSchema = new mongoose.Schema({
    courseName: String,
    courseThumbnail: String,
    videoDetails: [{videoTopic: String, videoLink: String, videoStatus: Boolean}]
})

const videoModel = mongoose.model('video',videoSchema);

module.exports = videoModel;