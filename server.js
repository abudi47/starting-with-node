
//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req,res){
    res.send("<h1>Hello..?..</h1>")
});
app.get("/about", function(req,res){
    res.send("<h1>abd..?..</h1>")
});
app.get("/contact", function(req,res){
    res.send("<h1>tg..?..</h1>")
});




app.post("/calculator", function(req,res){
    console.log("thanks for using our calculator")

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 +  num2;

    res.send("<h1>Te result is </h1>" + result)
})
app.get("/calculator", function(req,res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/bmi" , function(req,res){
    var n1 = parseFloat(req.body.n1)
    var n2 = parseFloat(req.body.n2)

    var result = (n1 / (n2*n2))
    res.send("your bmi is " + result)
});
app.get("/bmi", function(req,res){
    res.sendFile(__dirname + "/bmi.html")
})



app.listen(99 , function(){
    console.log("server..")
});