var url = require('url');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: { q: "codeschool"}
};

var searchURL = url.format(options);

var request = require('request');
request(searchURL, function(error, response, body) {
  console.log(body);
});