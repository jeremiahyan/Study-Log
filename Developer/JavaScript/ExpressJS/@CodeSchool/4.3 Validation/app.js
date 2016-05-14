var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

app.post('/cities', parseUrlencoded, function (request, response) {
  var body = request.body;
  if (body.description.length > 4) {
    var city = createCity(request.body.name, request.body.description);
    response.status(201).json(city);
  } else {
    response.status(400).json('Invalid City');
  }
});

app.listen(3000);
