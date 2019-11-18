import net from "net"
import koa from 'koa'
var client= new net.Socket()
const app = new koa()
client.setEncoding('binary');

app.use(async ctx => {
  client.connect(8010, "113.250.159.155", function() {
    console.log('success')
    client.write('11111')
    client.end()
  })
  client.on("data", function(data: any) {
    console.log(data.toString())
    client.end()
  })
  client.on("end", function() {
    console.log("断开与服务器的连接")
  })
})

app.listen(8000, () => {
  console.log('running 8000')
})


