const express = require('express');
const { upload } = require('../../multerConfig');
const { addSlide, viewSlide, deleteSlide, viewSlideById, updateSlideWithoutImage, updateSlideWithImage } = require('../../controllers/lmsAdmin/slidesAdminController');
const slideRouter = express.Router();

slideRouter.post('/addSlide', upload.single('slideImage'), addSlide);
slideRouter.get('/view-slide',viewSlide);
slideRouter.get('/delete-slide/:id',deleteSlide);
slideRouter.get('/view-slide/:id', viewSlideById);
slideRouter.post('/update-slide-wo-img/:id',updateSlideWithoutImage);
slideRouter.post('/update-slide-w-img/:id',upload.single('slideImage'), updateSlideWithImage);




module.exports = slideRouter;