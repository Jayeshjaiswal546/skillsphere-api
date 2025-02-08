const videoModel = require("../../models/VideosModel")

exports.addVideo = async (req, res) => {
    try {
        let checkCourse = await videoModel.findOne({ courseName: req.body.courseName });

        if (checkCourse) {
            let tempArr = checkCourse.videoDetails;
            tempArr.push({ videoTopic: req.body.videoTopic, videoLink: req.body.videoLink, videoStatus: req.body.videoStatus });
            let result = await videoModel.updateOne({ courseName: req.body.courseName }, { videoDetails: tempArr });
            console.log(result);
            res.send({ "status": 1, "msg": "Video added to the course" });
        } else {
            const newVideo = new videoModel({
                courseName: req.body.courseName,
                courseThumbnail: req.body.courseThumbnail,
                videoDetails: [{ videoTopic: req.body.videoTopic, videoLink: req.body.videoLink, videoStatus: req.body.videoStatus }]
            })
            let result = await newVideo.save();
            console.log(result);
            res.send({ "status": 1, "msg": "Video added to the course" });
            // console.log(req.body);
        }
    } catch (err) {
        console.log(err);
        res.send("err caught in the catch");
    }
}

exports.viewVideo = async (req, res) => {
    try {
        let result = await videoModel.find();
        res.send(result);
    } catch {
        res.status(500).send("Error Occured");
    }
}

exports.viewVideosOfCourse = async (req, res) => {
    try {
        const result = await videoModel.findById(req.params.id);
        console.log(result);
        res.send({"status":1,"result":result});
    } catch (err) {
        console.log(err);
        res.send({ "status": 0, "msg": "Something went xrong" });
    }
}

exports.viewVideosOfCourseByCourseName = async (req, res) => {
    try {
        const result = await videoModel.find({"courseName":req.params.courseName});
        console.log(result);
        res.send({"status":1,"result":result});
    } catch (err) {
        console.log(err);
        res.send({ "status": 0, "msg": "Something went xrong" });
    }
}

exports.deleteVideoOfCourse = async (req,res)=>{
    try{
        const result = await videoModel.findByIdAndUpdate(
            req.params.id,
            {$pull: {videoDetails: {_id: req.params.videoId}}}
        )
        console.log(result);
        console.log(req.params.id);
        console.log(req.params.videoId);
        if(result){
            res.send({"status":1,"msg":"Video deleted"});            
        }else{
            res.send({"status":0,"msg":"Course not found"});
        }
    }catch(err){
        console.log(err);
        res.send({"status":0,"msg":"Something went xrong"});
    }
}

exports.updateVideoSameCourse = async (req,res)=>{
    courseId = req.params.courseId,
    videoId = req.params.videoId;
    try{
        const result = await videoModel.findByIdAndUpdate(
            courseId,
            { $set: {"videoDetails.$[elem]":req.body}},
            {arrayFilters: [{"elem._id":videoId }], new:true}
        )
        res.send({ status: 1, msg: "Update successful", result });
    }catch(err){
        console.log(err);
        res.send({"status":0, "msg": "Something went xrong"});
    }
}