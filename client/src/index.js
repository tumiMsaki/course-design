import "./index.less"
var ws = new WebSocket("ws://192.168.43.247:8000")
ws.binaryType = "arraybuffer";
const $ = name => {
  return document.querySelector(`.${name}`)
}

let air_t = $('air_temperature')
let air_h = $('air_humidity')
let light_i = $('light_intensity')
let setting_btn = $('data_submission')
let data = document.querySelectorAll('.data')
let ventilation = $('ventilation')
let sprinkler_irrigation = $('sprinkler_irrigation')
let fill_light = $('fill_light')

setting_btn.addEventListener('click', () => {
    ws.send([air_t.value, air_h.value, light_i.value].join('#'))
})

ws.onmessage = function(e) {
  let arr = e.data.split('#')
  for (let i = 0; i < data.length; i++) {
    data[i].innerHTML = arr[i]
  }
}

class BtnClick {
  constructor(element, data) {
    this.element = element
    this.data = data
    this.flag = false
  }

  click() {
    this.element.addEventListener('click', () => {
      this.flag = !this.flag
      ws.send(data)
      if (this.flag) {
        this.element.style.backgroundColor = 'red'
      } else {
        this.element.style.backgroundColor = 'white'
      }
    })
  }
}

let btn1 = new BtnClick(ventilation,'1234')
btn1.click()
let btn2 = new BtnClick(sprinkler_irrigation,'1234')
btn2.click()
let btn3 = new BtnClick(fill_light,'1234')
btn3.click()
