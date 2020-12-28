const lyric = require("../Models/lyric");
const video = require("../Models/video");

module.exports = function(app){


    app.get("/lyric", function(req, res){
        video.find(function(err,data){
            if(err){
                res.json({"kq":0 , "errMsg":err});
            } else {
                res.render("admin_master", {content:"./Lyric/lyric.ejs", dsVideo: data});
            }
    
        });
    
        // res.render("admin_master", {content:"./Lyric/lyric.ejs"});
    });


    app.post("/LyricKorea/add", function(req, res){
 
    var l = lyric({
           
        Korean: req.body.Korean,
        English: req.body.English,
        Time: req.body.Time
        

       
    })
    console.log(l);

    l.save(function(err){

        if(err){
          res.json({kq:0, errMsg:err});
        }
        else {
            video.findOneAndUpdate({_id: req.body.slVideo}, {$push: {Lyric:l._id}}, function(err){
                if(err){    
                    res.json({"kq": 0, "errMsg":err});
        
                }else {
                    res.json({kq:1});
                }
               });
               console.log(req.body.slVideo);
        }

        });
    });



    app.get("/lyricKorea", function(req, res){

    lyric.find(function(err, data){

        if(err){

            res.json({kq:0, errMsg:err});
          }
          else {
              res.json({kq:1, arrLyric:data});
          }

     });

    });




    app.post("/lyricKorea/update", function(req, res){
        lyric.findByIdAndUpdate(req.body.idLyric, {
            Korean: req.body.Korean,
            English: req.body.English,
            Time: req.body.Time
        }, function(err){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                video.findOneAndUpdate({_id: req.body.slVideo}, {$push: {Lyric:l._id}}, function(err){
                    if(err){    
                        res.json({"kq": 0, "errMsg":err});
            
                    }else {
                        res.json({kq:1});
                    }
                   });
                   console.log(req.body.slVideo);
            }
        });
    });







    
        
}

