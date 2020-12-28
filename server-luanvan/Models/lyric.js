const mongoose = require("mongoose")

const lyricSchema = new mongoose.Schema({

   
    Korean: String,
    English: String,
    Time: String

});

module.exports = mongoose.model("lyric", lyricSchema);
