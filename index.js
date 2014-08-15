var express = require('express');
var compression = require('compression');

var app = express();

// Enable gzip compression.
app.use(compression());

app.use(express.static(__dirname + '/dist'));

app.get('*', function(request, response){
  response.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT);
