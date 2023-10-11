
const User = require('../models/user');


// Login user.
exports.loginuserController = async(req,res,next) => {
    try{
        const {email,password} = req.body;
        if(!email || !password){
            const errors = new Error("Please mention all inputs fields is required");
            errors.statusCode = 400;
            throw errors;
        }
        const result = await User.findOne({email:email});
        if(result.email == null) {
            const errors = new Error("Email is incorrect");
            errors.statusCode = 400;
            throw errors;
        }
        if(result.password == password){
            res.status(200).json({
                status : "OK",
                message : "Login is sucessful"
            })
        }
        else{
            const errors = new Error("Password is incorrect");
            errors.statusCode = 400;
            throw errors;
        }

    }
    catch(err){
        res.status(err.statusCode || 500).json({
            message : err.message
        })
    }
}