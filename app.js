const http = require('http');
const os = require('os');

console.log("Kubia server starting...");

var requestCount = 0;

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  requestCount++;
  response.writeHead(200);
//  response.write("VERSION: Some version! " + "\n");
  response.write("BUILD_NUM:  "  + process.env.BUILD_NUM + "\n");
  response.write("Request Count: " + requestCount + "\n");
  response.write("Request comes from IP: " + request.connection.remoteAddress + "\n");
  response.end("You've hit " + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8080);

