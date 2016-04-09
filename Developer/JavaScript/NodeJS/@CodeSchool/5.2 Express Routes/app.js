var express = require('express');
var app = express();
app.get("/tweets", function(requset, response) {
  response.sendFile(__dirname + "/tweets.html");
});
app.listen(8080);