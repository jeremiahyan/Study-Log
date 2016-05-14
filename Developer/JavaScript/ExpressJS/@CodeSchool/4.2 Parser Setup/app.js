var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var parseUrlencoded = bodyParser.urlencoded({ extended: false});

app.post('/cities', parseUrlencoded, function (request, response) {
  var body = request.body;
  var city = createCity(body.name, body.description);
  
  response.status(201).json(city);
});

app.listen(3000);

var createCity = function(name, description){
  cities[name] = description;
  return name; 
};
