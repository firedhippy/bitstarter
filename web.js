

var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());


var text_from_index = fs.readFile(index.html);

app.get('/', function(request, response) {
  response.send('text_from_index');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
