
//jshint esversion:6
const express = require("express")
const app = express();


app.get("/", function(req,res){
    res.send("<h1>Hello..?..</h1>")
});
app.get("/about", function(req,res){
    res.send("<h1>abd..?..</h1>")
});
app.get("/contact", function(req,res){
    res.send("<h1>tg..?..</h1>")
});



app.listen(3000 , function(){
    console.log("server..")
});