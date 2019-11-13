import './index.css'
function component() {
  let element = document.createElement("div")

  element.innerHTML = "xxxxx"
  return element
}
const container = document.querySelector(".container")
let element = component()
container.appendChild(element)
