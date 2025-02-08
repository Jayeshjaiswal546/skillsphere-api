const mongoose = require('mongoose');
require('../config');

const TeamSchema = new mongoose.Schema({
    memberName : String, 
    memberDomain: String, 
    memberStatus: Boolean,
    memberImage: String
})

const TeamModal = mongoose.model('team', TeamSchema);
module.exports = TeamModal;
