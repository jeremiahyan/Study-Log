var fs = require('fs');
var file = fs.createReadStream("fruits.txt");
file.on('readable', function() {
  var chunk = null;
  while(null !== (chunk = file.read())) {
    console.log(chunk.toString());
  }
});