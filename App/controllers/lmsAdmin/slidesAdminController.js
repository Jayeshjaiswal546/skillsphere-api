const SlideModel = require("../../models/SlidesModel");


exports.addSlide = async (req, res) => {

    try {
        const newSlide = new SlideModel({
            //data comes here as key-value pairs
            // slideImage: req.file.filename
            slideName: req.body.slideName,
            slideStatus: req.body.slideStatus,
            slideImagePath: req.file.path
        });
        let result = await newSlide.save();
        console.log(result);
        // console.log(req.file);
        console.log("Niche req.body hai");
        console.log(req.body);
        res.send("Slide Added successfully");
    }catch(err){
        console.log("Something went xrong");
        res.status(500).send(err);
        console.log("Niche req.body hai");
        console.log(req.body);
    } 
}

exports.viewSlide = async (req,res)=>{
    const result = await SlideModel.find();
    res.send(result);
}
exports.viewSlideById = async (req, res) => {
    let result = await SlideModel.findById(req.params.id);
    res.send(result);
}



exports.deleteSlide = async (req,res)=>{
    try{
        const result = await SlideModel.findByIdAndDelete(req.params.id);
        console.log(result);
        if(result){
            res.send({"status":1,"msg":"Slide deleted"});            
        }else{
            res.send({"status":0,"msg":"Slide not found"});
        }
    }catch(err){
        console.log(err);
        res.send({"status":0,"msg":"Something went xrong"});
    }
    
}


exports.updateSlideWithoutImage = async (req, res) => {
    try {
        let result = await SlideModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log(result);
        // console.log(req.body);
        if (result) {
            res.send({ "status": 1, "msg": "Update Successful" });
        } else {
            res.send({ "status": 0, "msg": "Slide not found" });
        }
    } catch (err) {
        console.log(err)
        res.send({ "status": 0, "msg": "Something went xrong" });
    }
}

exports.updateSlideWithImage = async (req, res) => {
    try {
        let tempObj = {
            ...req.body,
            slideImagePath: req.file.path
        };

        let result = await SlideModel.findByIdAndUpdate(req.params.id, tempObj, {new: true});
        console.log(result);
        if(result){
            res.send({"status":1,"msg":"Update Successful"});            
        }else{
            res.send({"status":0,"msg":"Slide not found"});
        }
    } catch (err) {
        console.log(err)
        res.send({ "status": 0, "msg": "Something went xrong" });
    }
}


