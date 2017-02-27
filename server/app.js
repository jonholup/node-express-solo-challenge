var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var jokes = require('./routes/jokes.js')
var port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
// static file requests
app.use(express.static('server/public'));

// routes
app.use('/jokes', jokes);


// Send index.html file
app.get('/', function(req, res) {
  res.sendFile(path.resolve('server/public/views/index.html'));
});

// Start the server!
app.listen(port, function() {
  console.log("Node listening on port " + port);
});
