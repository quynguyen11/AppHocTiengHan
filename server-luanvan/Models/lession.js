const mongoose = require("mongoose")

const lessionSchema = new mongoose.Schema({

    Title: String,
    File: String,
   

});

module.exports = mongoose.model("lession", lessionSchema);

