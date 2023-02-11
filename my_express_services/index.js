// jshint esversion:6
const express = require('express');
var app = express();
const port = 3000;

app.get('/' , (req,res)=>{
    res.send('<h1>hello sapna</h1>')
})

app.get('/personal',(req,res)=>{
    res.send('<h2>i really love her</h2>')
})
app.get('/about',(req,res)=>{
    res.send('<h3>she is very sweet and lovely , frendly and i really like her nature</h1>')

})
app.listen(port , ()=>{
    console.log('example app reference on port ${port}')
})