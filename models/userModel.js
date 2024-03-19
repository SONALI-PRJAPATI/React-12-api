const mongoose = require("mongoose");



const userModel = new mongoose.Schema({
    username: {
       type: String,
       trim: true,
       unique: true,
       required: [true, "username is required"],
       minLength: [3, "username must be atleast 3 characters"],
    }, 
    email: {
       type: String,
       lowercase: true,
       required: [true, "email is required"],
       match: [
        /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/, 'Please fill a valid email address'],

    }, 
   password: {
       type: String,
       trim: true,
       unique: true,
       required: [true, "password is required"],
       minLength: [3, "password must be atleast 3 characters"],
       maxLength: [15, "password must be atleast 15 characters"],
    }, 
   },
   { timestamps : true }
);

const user = mongoose.model("user", userModel);



module.exports = user;