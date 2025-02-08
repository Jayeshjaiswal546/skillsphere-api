const TeamModel = require("../../models/TeamModel")


exports.addTeam = async (req, res) => {
    try {
        const newMember = new TeamModel({
            memberName: req.body.memberName,
            memberDomain: req.body.memberDomain,
            memberStatus: req.body.memberStatus,
            memberImage: req.file.path
        })
        let result = newMember.save();
        console.log(result);
        res.send("Team Added Successfully")

    } catch (err) {
        res.status(500).send(err);
    }
}

exports.viewTeam = async (req, res) => {
    let result = await TeamModel.find();
    res.send(result);
}

exports.viewMemberById = async (req, res) => {
    let result = await TeamModel.findById(req.params.id);
    res.send(result);
}

exports.deleteTeam = async (req, res) => {
    try {
        let result = await TeamModel.findByIdAndDelete(req.params.id)
        console.log(result);
        if (result) {
            res.send({ "status": 1, "msg": "Team member deleted" });
        } else {
            res.send({ "status": 0, "msg": "Member not found" });
        }

    } catch (err) {
        console.log(err);
        res.send({ "status": 0, "msg": "Something went xrong" });
    }
}

exports.updateTeamWithoutImage = async (req, res) => {
    try {
        let result = await TeamModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log(result);
        // console.log(req.body);
        if (result) {
            res.send({ "status": 1, "msg": "Update Successful" });
        } else {
            res.send({ "status": 0, "msg": "Member not found" });
        }
    } catch (err) {
        console.log(err)
        res.send({ "status": 0, "msg": "Something went xrong" });
    }
}

exports.updateTeamWithImage = async (req, res) => {
    try {
        let tempObj = {
            memberName: req.body.memberName,
            memberDomain: req.body.memberDomain,
            memberStatus: req.body.memberStatus,
            memberImage: req.file.path
        };

        let result = await TeamModel.findByIdAndUpdate(req.params.id, tempObj, {new: true});
        console.log(result);
        if(result){
            res.send({"status":1,"msg":"Update Successful"});            
        }else{
            res.send({"status":0,"msg":"Member not found"});
        }
    } catch (err) {
        console.log(err)
        res.send({ "status": 0, "msg": "Something went xrong" });
    }
}