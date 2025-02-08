const courseModel = require("../../models/CoursesModel")

exports.addCourse = async (req, res) => {

    try {
        const newCourse = new courseModel({
            ...req.body,
            courseThumbnail: req.file.path
        });
        let result = await newCourse.save();
        console.log(result);
        res.send({ "status": true, "msg": "Course added successfully" })
    } catch (err) {
        res.send({ "status": false, "msg": err })
    }
}

exports.viewCourse = async (req, res) => {
    try {
        let result = await courseModel.find();
        res.send(result);
    } catch {
        res.status(500).send("Error Occured");
    }
}


exports.viewCourseById = async (req, res) => {
    let result = await courseModel.findById(req.params.id);
    res.send(result);
}


exports.deleteCourse = async (req, res) => {
    try {
        const result = await courseModel.findByIdAndDelete(req.params.id);
        console.log(result);
        if (result) {
            res.send({ "status": 1, "msg": "Course deleted" });
        } else {
            res.send({ "status": 0, "msg": "Course not found" });
        }
    } catch (err) {
        console.log(err);
        res.send({ "status": 0, "msg": "Something went xrong" });
    }
}

exports.updateCourseWithoutImage = async (req, res) => {
    try {
        let result = await courseModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log(result);
        // console.log(req.body);
        if (result) {
            res.send({ "status": 1, "msg": "Update Successful" });
        } else {
            res.send({ "status": 0, "msg": "Course not found" });
        }
    } catch (err) {
        console.log(err)
        res.send({ "status": 0, "msg": "Something went xrong" });
    }
}

exports.updateCourseWithImage = async (req, res) => {
    try {
        let tempObj = {
            ...req.body,
            courseThumbnail: req.file.path

        };

        let result = await courseModel.findByIdAndUpdate(req.params.id, tempObj, { new: true });
        console.log(result);
        if (result) {
            res.send({ "status": 1, "msg": "Update Successful" });
        } else {
            res.send({ "status": 0, "msg": "Course not found" });
        }
    } catch (err) {
        console.log(err)
        res.send({ "status": 0, "msg": "Something went xrong" });
    }
}