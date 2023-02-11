// jshint version:6
const express = require("express");
const bodyparser = require("body-parser");
const { getday } = require("./date");
const app = express();
const date = require(__dirname +"/date.js")
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
var workitems = [];
var items =["Buy food","Cook food" , "Eat food"];
app.set("view engine" , "ejs");
app.get("/", (req,res)=>{
    var day = date.getdate();
    
    res.render('list' , {
        listoftitle:day,
        newlistitems:items
    });
    
    
});
app.post("/" , (req,res)=>{
    let item = req.body.newitem;
    if(req.body.list === "work"){
        workitems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    
});
app.get("/work" , (req,res)=>{
    res.render("list" , {listoftitle:"work List" , newlistitems: workitems});
});
app.get("/about", (req,res)=>{
    res.render("about");
})

app.listen(3000 , ()=>{
    console.log("your terminal work properly")
})