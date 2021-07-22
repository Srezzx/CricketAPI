var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const e = require("express");
require("dotenv").config();
var app = express();
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(
  express.urlencoded({
    extended: true,
  })
);

var json = process.env.JSON;
var json2 = JSON.parse(json);
// console.log(json2);

app.get("/", async (req,res) => {
    res.send("Hey there");
});


app.post("/find", async(req,res) => {
    console.log("***************************");
    var series = req.body.seriesID;
    console.log(series);
    for(var i=0;i<json2.length;i++){
        console.log(json2[i].seriesId);
        if(json2[i].seriesId == series)
        {
            res.send(json2[i]);
        }
    }

});


app.listen(process.env.PORT || 3000, process.env.ID, function (req, res) {
  console.log("Server has  at PORT 3000");
});
