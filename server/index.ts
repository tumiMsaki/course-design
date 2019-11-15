import http from "http"
import WebSocket from "ws" 

const server: http.Server = http.createServer((request, response) => {
  console.log(new Date() + " Received request for " + request.url)
  response.writeHead(404)
  response.end()
})

server.listen(8000, () => {
  console.log("running 8000")
})

var wss = new WebSocket.Server({
  server: server
})

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    console.log("server: received: %s", message)
  })

  setInterval(() => {
    let data = '13#22#44444'
    ws.send(data)
  }, 1000)
})
