module.exports = function (request, response, next) {
  var startTime = +new Date();
  var stream = process.stdout;
  var duration = null;

  response.on('finish', function () {
    duration = +new Date() - startTime;
    stream.write('This request took ' + duration + ' ms');
  });
  
  next();
};
