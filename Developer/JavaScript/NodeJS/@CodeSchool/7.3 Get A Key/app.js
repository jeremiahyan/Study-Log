var redis = require('redis');
var client = redis.createClient();

client.get('question', function(error, data) {
  console.log(data);
});