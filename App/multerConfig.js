const multer = require("multer");
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function (req, file , cb){
        cb(null, 'uploads');
    },
    filename: function (req, file, cb){
        const timeStamp = Date.now();
        cb(null, `${timeStamp}+${file.originalname}`);
    }
})

exports.upload = multer({storage: storage});
