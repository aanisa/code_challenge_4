var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var db = require("./modules/db");
var listings = require("./routes/listings");

app.set("port", (process.env.PORT || 5000));
//PORT has to be capitalized, otherwise csan't host on heroku - note to self

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("./server/public"));
app.use("/listings", listings);

app.get("/", function(req,res){
  res.sendFile(path.resolve("./server/public/views/index.html"));
});


app.listen(app.get("port"), function(req,res){
  console.log("Listening on port: ", app.get("port"));
});

module.exports = app;
