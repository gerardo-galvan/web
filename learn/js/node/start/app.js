var express = require("express");
var app = express();

app.use(function(req,res, next) {
    
    console.log(`${req.method} request for '${req.url}'`)
    next();
    
});

app.use(express.static("X:\OneDrive\Projects\learn\node\start\"));

app.listens(3000);
console.log("Express app");

module.exports = app;