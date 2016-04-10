var redis = require('redis');
var client = redis.createClient();

var question1 = "Where is the dog?";
var question2 = "Where is the cat?";

client.lpush('questions', question1, function(error, value) {
  console.log(value);
});

client.lpush('questions', question2, function(error, value) {
  console.log(value);
});