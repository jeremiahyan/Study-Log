var url = require('url');

options = {
  // add URL options here
  protocol: "http: ",
  host: 'search.twitter.com',
  pathname: '/search.json',
  query: {q: 'codeschool'}
};

var searchURL = url.format(options);
console.log(searchURL);
