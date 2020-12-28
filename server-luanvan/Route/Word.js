const word = require("../Models/word");

module.exports = function(app){


    app.get("/word", function(req, res){
        res.render("admin_master", {content:"./Word/word.ejs"});
    });

    app.post("/wordKorea/add", function(req, res){
 
    var w = word({
           
        Language: req.body.Language,
        Spelling: req.body.Spelling,
        Meaning: req.body.Meaning,
        Media: req.body.Media,
        Types: req.body.Types
       
    })
    console.log(w);
    w.save(function(err){

        if(err){

          res.json({kq:0, errMsg:err});
        }
        else {
            res.json({kq:1});
        }
        });
    });

    app.get("/wordKorea", function(req, res){
    word.find(function(err, data){

        if(err){

            res.json({kq:0, errMsg:err});
          }
          else {
              res.json({kq:1, arrWord:data});
          }
 
     });
    });

    app.post("/wordKorea/update", function(req, res){
        word.findByIdAndUpdate(req.body.idWord, {

            Language: req.body.LanguageD,
            Spelling: req.body.SpellingD,
            Meaning: req.body.MeaningD,
            Media: req.body.MediaD,
            Types: req.body.TypesD
          
        }, function(err){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1});
            }
        });
    });

    app.post("/wordKorea/delete", function(req, res){
        word.findOneAndDelete({_id:req.body.idWord}, function(err){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1});
            }
        });
    });

}