const mongoose = require("mongoose")

const grammarSchema = new mongoose.Schema({

    Title: String,
    File: String,
   

});

module.exports = mongoose.model("grammar", grammarSchema);

