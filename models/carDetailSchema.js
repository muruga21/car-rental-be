const mongoose = require("mongoose")

const carDetailSchema = new mongoose.Schema({
    carPicture:{type: String, require: true, default: ""},
    carName: {type: String, require: true, default: ""},
    carPrice: {type: String, require: true, default:""},
    isAvailable: {type: Boolean, require: true, default: true},
    location: {type: String, require:true, default:""}
})

const carDetailModel = mongoose.model('carDetails',carDetailSchema);

module.exports = {carDetailModel}