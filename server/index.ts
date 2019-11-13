import http from 'http'
import WebSocket from 'ws'
const webSocketsServerPort: number = 8000

const server: http.Server = http.createServer((request, response) => {
  console.log(new Date() + " Received request for " + request.url)
  response.writeHead(404)
  response.end()
})

server.listen(webSocketsServerPort, () => {
  console.log("running 8000")
})

var wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    console.log('server: receive connection.');
    
    ws.on('message', function incoming(message) {
        console.log('server: received: %s', message);
    });

    ws.send('world');
});
