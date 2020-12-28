const video = require("../Models/video");
const lyric = require("../Models/lyric");

module.exports = function(app){


    app.get("/video", function(req, res){
        
        res.render("admin_master", {content:"./Video/video.ejs"});
    });


    app.post("/video/add", function(req, res){
 
    var v = video({
           
        Title: req.body.Title,
        File: req.body.File,
        Lyric: []
       
    });
    console.log(v);
    v.save(function(err){

        if(err){

          res.json({kq:0, errMsg:err});
        }
        else {
            res.json({kq:1});
        }
        });
    });

    app.get("/videoKorea", function(req, res){

    video.find(function(err, data){

        if(err){

            res.json({kq:0, errMsg:err});
          }
          else {
              res.json({kq:1, arrVideo:data});
          }
 
     });
    });

    app.get("/videoKorean", function(req, res){

        var v = video.aggregate([{
            $lookup:{
                from: "lyrics",
                localField:"Lyric",
                foreignField:"_id",
                as: "DSLyric"
            }
        }], function(err,data){
            if(err){
                res.json({"kq":0 , "errMsg":err});
            } else {

                 res.json({kq:1,DSVideo:data});
                
            }
     
        });
     
    });


    app.post("/videoKorea/update", function(req, res){
        video.findByIdAndUpdate(req.body.idVideo, {

            Title: req.body.Title,
            File: req.body.File,
        
        }, function(err){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1});
            }
        });
    });


    app.post("/videoKorea/delete", function(req, res){
        // console.log(req.body);
        video.findOneAndDelete({_id:req.body.idVideo}, function(err){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
           
                lyric.findOneAndDelete({_id:req.body.idlyric}, function(err){
                    if(err){
                        res.json({kq:0, errMsg:err});
                    }else{
                   
                        res.json({kq:1});
                      
                    }
                });
              
            }
        });
    });

}
