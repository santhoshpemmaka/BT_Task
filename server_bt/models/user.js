const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// User Schema for database reference
const Adminuser = Schema({
    email : {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("User",Adminuser)