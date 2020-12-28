const mongoose = require("mongoose")

const wordSchema = new mongoose.Schema({

    Language: String,
    Spelling: String,
    Meaning: String,
    Media: String,
    Types: String, 

});

module.exports = mongoose.model("word", wordSchema);

