const mongoose = require("mongoose")

const videoSchema = new mongoose.Schema({

    Title: String,
    File: String,
    Lyric: [{type:mongoose.Schema.Types.ObjectId}]
   

});

module.exports = mongoose.model("video", videoSchema);
