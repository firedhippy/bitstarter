

var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());


var text_from_index;
fs.readFile('index.html',function(err,data) {
	if(err) throw err;
	text_from_index = data;
});

app.get('/', function(request, response) {
  response.send("hello world 2");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
