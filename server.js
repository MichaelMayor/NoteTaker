  
// dependencies
var express = require("express");
var path = require("path");
var fs = require("fs");

// Express config

var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes", function(req, res) {
    fs.readFile(path.join(__dirname + "/db/db.json"), (err, data) => {
        if (err) throw err;
        return res.json(JSON.parse(data));
    });
});


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});