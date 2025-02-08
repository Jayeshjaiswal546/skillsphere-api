const mongoose = require('mongoose');

require('../config');

const courseSchema = new mongoose.Schema({
    courseName : String, 
    coursePrice: String,
    courseDuration: String,
    courseDescription: String,
    courseInstructor:String,
    courseStatus: Boolean,
    courseThumbnail:String,
})

const courseModel = mongoose.model('course', courseSchema);
module.exports = courseModel;



