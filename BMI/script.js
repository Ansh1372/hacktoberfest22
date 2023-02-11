// jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
const port = 3000;
app.get('/' , (req , res)=>{
    res.sendFile(__dirname + "/index.html");
})
app.post('/' , (req,res)=>{
    var H = Number(req.body.h);
    var W = Number(req.body.w);
    BMI = H*W;
    res.send("thanks sapna for this amazing work : " +BMI); 
})
app.listen(port , ()=>{
    console.log("very good sapna")
})