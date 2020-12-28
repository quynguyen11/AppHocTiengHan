const lession = require("../Models/lession");

module.exports = function(app){


    app.get("/lession", function(req, res){
        res.render("admin_master", {content:"./Lession/lession.ejs"});
    });


    app.post("/lessionKorea/add", function(req, res){
 
    var l = lession({
           
        Title: req.body.Title,
        File: req.body.File,

       
    })
    console.log(l);
    l.save(function(err){

        if(err){

          res.json({kq:0, errMsg:err});
        }
        else {
            res.json({kq:1});
        }
        });
    });

    app.get("/lessionKorea", function(req, res){

    lession.find(function(err, data){

        if(err){

            res.json({kq:0, errMsg:err});
          }
          else {
              res.json({kq:1, arrLession:data});
          }
 
     });
    });

    app.post("/lessionKorea/update", function(req, res){
        lession.findByIdAndUpdate(req.body.idCate, {
            Title: req.body.CateTitle,
            File: req.body.FileCate
        }, function(err){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1});
            }
        });
    });

    app.post("/lessionKorea/delete", function(req, res){
        lession.findOneAndDelete({_id:req.body.idCate}, function(err){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1});
            }
        });
    });

   
}