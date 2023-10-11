const feedbackSchema = require("../models/feedBack");


// Get all feedback data
exports.getallFeedbackController = async(req,res,next) => {
    try{
        const feedBacks = await feedbackSchema.find();
        res.status(200).json({
            status : "OK",
            message : "Success",
            data : feedBacks
        })
    }
    catch(err) {
        res.status(500).json({
            message : "Didn't get feedback info"
        })
    }
}

// Add new feedback data
exports.postFeedbackController = async(req,res,next) => {
    try{
        const {name, email, company,comments} = req.body;
        if(!name || !email || !company || !comments){
            const errors = new Error("Please mention all inputs fields is required");
            errors.statusCode = 400;
            throw errors;
        }
        const newFeedback = new feedbackSchema({
            name,
            email,
            company,
            comments
        })
        await newFeedback.save();
        res.status(200).json({
            status : "OK",
            message : "Success"

        })
    }
    catch(err) {
        res.status(err.statusCode || 500).json({
            message : err.message
        })
    }
}