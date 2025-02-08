let express = require('express');
const { addVideo, viewVideo, viewVideosOfCourse, deleteVideoOfCourse, updateVideoSameCourse, viewVideosOfCourseByCourseName } = require('../../controllers/lmsAdmin/videosAdminController');
let videoRouter = express.Router();

videoRouter.post('/add-video', addVideo);
videoRouter.get('/view-video', viewVideo);
videoRouter.get('/view-video/:id', viewVideosOfCourse);
videoRouter.get('/view-video/coursename/:courseName', viewVideosOfCourseByCourseName);
videoRouter.get('/delete-video/:id/:videoId', deleteVideoOfCourse);
videoRouter.post('/update-video-same-course/:videoId/:courseId', updateVideoSameCourse);


module.exports = videoRouter;