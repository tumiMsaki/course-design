import "./index.less"
var ws = new WebSocket("ws://localhost:8000")
ws.binaryType = "blob";
const $ = name => {
  return document.querySelector(`.${name}`)
}

let air_t = $('air_temperature')
let air_h = $('air_humidity')
let light_i = $('light_intensity')
let setting_btn = $('data_submission')
let data = document.querySelectorAll('.data')

setting_btn.addEventListener('click', () => {
    ws.send(air_t.value, air_h.value, light_i.value)
})

ws.onmessage = function(e) {
  for (let i = 0; i < data.length; i++) {
    data[i].innerHTML = e.data
  }
}
