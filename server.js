var http = require("http");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

//var controllers = require("./srvControllers");

//Set up the view engine
// app.set("view engine", "vash");

// Opt into services
app.use(bodyParser.urlencoded({ extended: false }))

//Map the routes
// controllers.init(app);
app.get('/', function(req, res){
  res.sendfile('srvViews/layout.html');
});

//Show static files like css, knockout scripts, images, ...
app.use(express.static(__dirname, "/public"));

var server = http.createServer(app);
server.listen(3001, function() {console.log('Node app is ready! Listening on port 3001...');});