const express = require('express');
const { upload } = require('../../multerConfig');
const { addCourse, viewCourse, deleteCourse, viewCourseById, updateCourseWithoutImage, updateCourseWithImage } = require('../../controllers/lmsAdmin/coursesAdminController');
const courseRouter = express.Router();

courseRouter.post('/add-course',upload.single('courseThumbnail'), addCourse);
courseRouter.get('/view-course',viewCourse);
courseRouter.get('/view-course/:id',viewCourseById);
courseRouter.get('/delete-course/:id',deleteCourse);
courseRouter.post('/update-course-wo-img/:id',updateCourseWithoutImage);
courseRouter.post('/update-course-w-img/:id',upload.single('courseThumbnail'), updateCourseWithImage)



module.exports = courseRouter;



