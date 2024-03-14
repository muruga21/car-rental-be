const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    userType:{type: String, required: true, default: "user"}
})

const userModel = mongoose.model('user',userSchema);

module.exports = {userModel};