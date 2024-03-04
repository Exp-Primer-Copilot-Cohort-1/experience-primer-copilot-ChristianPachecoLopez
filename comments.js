// Create web server

// Load the http module to create an http server.
var http = require('http');
var url = require('url');
//var comments = require('./comments');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
  console.log(query);
  response.writeHead(200, {"Content-Type": "text/html"});
  if (query.name) {
    response.write('Hello ' + query.name);
  } else {
    response.write('Hello World');
  }
  response.end();
});

// Listen on port 8000, IP defaults to


