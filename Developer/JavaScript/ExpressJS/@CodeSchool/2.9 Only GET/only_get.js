 module.exports = function(request, response, next) {
   if (request.method == 'GET') {
     next();
   } else {
     response.send('Method is not allowed');
   }
 };