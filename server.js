"use strict"

var express = require("express");

var app = express();

app.use(express.static("public"));

app.listen(3000, function() {
    console.log("Express server listening on port 3000");
});

var aString = "a string";
var anotherString = aString;

aString = '';

console.log(anotherString);
