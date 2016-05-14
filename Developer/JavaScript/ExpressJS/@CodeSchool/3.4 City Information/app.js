var express = require('express');
var app = express();

var cities = {
  'Lotopia': 'Rough and mountainous',
  'Caspiana': 'Sky-top island',
  'Indigo': 'Vibrant and thriving',
  'Paradise': 'Lush, green plantation',
  'Flotilla': 'Bustling urban oasis'
};

app.get('/cities/:name', function (request, response) {
  var cityInfo = cities[request.params.name];
  if (cityInfo) {
    response.json(cityInfo);
  } else {
    response.status(404).json('City not found');
  }
});

app.listen(3000);
