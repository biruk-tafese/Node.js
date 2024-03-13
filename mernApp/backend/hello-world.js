const http = require('http');
const server = http.createServer((req, resp) => {
       
  if (req.url == '/') {
    resp.write("Server created by Biruk;");
    resp.end();
  }

  if (req.url == '/api/courses') {
    resp.write(JSON.stringify([1, 2, 3]));
    resp.end();
  }
});

server.on('connection', (socket) => {
  console.log('New Connection!..');
});
server.listen(3000);

console.log("listening on port 3000..");
