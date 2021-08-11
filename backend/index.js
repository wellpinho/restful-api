/*
* Primary file for the API
*
*/

// Dependencies
const http = require('http');

// The server should be respond to all requests with a string
const server = http.createServer( function(req, res) {
  res.end('Hello World\n');
});

// Start the server, and have it listen on port 4000
server.listen(4000, function() {
  console.log('The server is listening on port 4000 now');
})
