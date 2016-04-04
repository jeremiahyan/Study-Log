var fs = require('fs');

var callback = function(err, contents) {
  console.log(contents);
};
fs.readFile('index.html', callback);