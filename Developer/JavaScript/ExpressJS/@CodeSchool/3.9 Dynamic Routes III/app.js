var express = require('express');
var app = express();

app.param('year', function(request, response, next) {
  if (isYearFormat(request.params.year)) {
    next();
  } else {
    response.status(400).json('Invalid Format for Year');
  }
});

var citiesYear = {
  5000: 'Lotopia',
  5100: 'Caspiana',
  5105: 'Indigo',
  6000: 'Paradise',
  7000: 'Flotilla'
};

function isYearFormat(value) {
  var regexp = RegExp(/^d{4}$/);
  return regexp.test(value);
}

app.get('/cities/year/:year', function(request, response) {
  var year = request.params.year;
  var city = citiesYear[year];

  if(!city) {
    response.status(404).json("No City found for given year");
  } else {
    response.json("In " + year + ", " + city + " is created.");
  }
});

app.listen(3000);                                                                                                                                                                                                                                                                                                       
