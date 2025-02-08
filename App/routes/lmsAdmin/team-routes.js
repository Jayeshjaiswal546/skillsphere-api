const express = require("express");
const { addTeam, viewTeam, deleteTeam, viewMemberById, updateTeamWithoutImage, updateTeamWithImage } = require("../../controllers/lmsAdmin/teamsAdminController");
const { upload } = require("../../multerConfig");
const teamRouter = express.Router();

teamRouter.post('/add-team',upload.single('memberImage'),addTeam);
teamRouter.get('/view-team',viewTeam);
teamRouter.get('/delete-team/:id',deleteTeam);
teamRouter.get('/view-team/:id', viewMemberById);
teamRouter.post('/update-team-wo-img/:id',updateTeamWithoutImage);
teamRouter.post('/update-team-w-img/:id',upload.single('memberImage'), updateTeamWithImage)

module.exports = teamRouter;