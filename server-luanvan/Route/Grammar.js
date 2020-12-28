const grammar = require("../Models/grammar");

module.exports = function(app){


    app.get("/grammar", function(req, res){
        res.render("admin_master", {content:"./Grammar/grammar.ejs"});
    });


    app.post("/grammarKorea/add", function(req, res){
 
    var g = grammar({
           
        Title: req.body.Title,
        File: req.body.File,
    })
    console.log(g);
    g.save(function(err){

        if(err){

          res.json({kq:0, errMsg:err});
        }
        else {
            res.json({kq:1});
        }
        });
    });

    app.get("/grammarKorea", function(req, res){

        grammar.find(function(err, data){

        if(err){

            res.json({kq:0, errMsg:err});
          }
          else {
              res.json({kq:1, arrGrammar:data});
          }
 
     });
    });



   
}