// jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
const port = 3000;
app.get('/' , (req,res)=>{
    res.sendFile(__dirname +"/index.html")
})
app.post('/' ,(req,res)=> {
    var num1 = Number(req.body.Num1);
    var num2 = Number(req.body.Num2);
    result = num1+num2;


    res.send("thanks Ansh your result is : " + result)
})
app.listen(port ,()=>{
    console.log('Goodwork Ansh')
})