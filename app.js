const http = require('http');
const os = require('os');

console.log("Kubia server starting ... ");

var requestCount = 0;

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  console.log(`${request.method} ${request.originalUrl}`) 
  requestCount=requestCount+1;
  response.writeHead(200);
  response.write("BUILD_NUM:  "  + process.env.BUILD_NUM + "\n");
  response.write("=============================================== \n");
  response.write(" \n");
  response.write("Commit: " + process.env.COMMIT + "  - Built on: " + process.env.BUILD_DATE + "\n");
  response.write("Request Count: " + requestCount + "\n");
  //response.write("Request comes from IP: " + request.connection.remoteAddress + "\n");
  response.write("You've hit " + os.hostname() + "\n");
  response.write(" \n");
  response.write("=============================================== \n");
  response.end("RESPOSNSE_MSG:  "  + process.env.RESPOSNSE_MSG + "\n");

};

var www = http.createServer(handler);
www.listen(8080);

