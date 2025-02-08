const mongoose = require('mongoose');
require('../config');

const slidesSchema = new mongoose.Schema({
    slideName: String,
    slideStatus: Boolean,
    slideImagePath: String
})

const SlideModel = mongoose.model('slides',slidesSchema);

module.exports = SlideModel;