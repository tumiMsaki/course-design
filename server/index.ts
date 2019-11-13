import http from "http"
import * as ws from "websocket"
const websocket = ws.server

const webSocketsServerPort: number = 8000
const server: http.Server = http.createServer()

server.listen(webSocketsServerPort, () => {
  console.log('running 8000')
})
const wsServer = new websocket({
  httpServer: server
})
