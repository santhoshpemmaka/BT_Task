const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// feedback Schema for database reference
const feedbackSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
    },
    company : {
        type : String,
        required : true,
    },
    comments : {
        type : String,
        required : true
    }
}, {timestamps : true});

module.exports = mongoose.model("FeedbackSchema", feedbackSchema);



// Name, email, company, comments