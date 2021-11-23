const http = require('http');
const os = require('os');

console.log("Kubia server starting...");

var requestCount = 0;

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  requestCount++;
  response.writeHead(200);
  response.write("BUILD_NUM:  "  + process.env.BUILD_NUM + "\n");
  response.write("=============================================== \n");
  response.write(" \n");
  response.write("VERSION: Version 1.6 - pushed at 20:22! " + "\n");
  response.write("Request Count: " + requestCount + "\n");
  response.write("Request comes from IP: " + request.connection.remoteAddress + "\n");
  response.end("You've hit " + os.hostname() + "\n");
  response.write(" \n");
  response.write("=============================================== \n");
  response.write("RESPOSNSE_MSG:  "  + process.env.RESPOSNSE_MSG + "\n");

};

var www = http.createServer(handler);
www.listen(8080);

