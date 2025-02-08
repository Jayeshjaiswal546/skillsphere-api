const express = require('express');
const slideRouter = require('./routes/lmsAdmin/slider-routes');
const teamRouter = require('./routes/lmsAdmin/team-routes');
const courseRouter = require('./routes/lmsAdmin/courses-routes');
const videoRouter = require('./routes/lmsAdmin/videos-routes');
const router = express.Router();

router.use('/slide', slideRouter);
router.use('/team',teamRouter);
router.use('/course',courseRouter);
router.use('/video',videoRouter);


module.exports = router;
