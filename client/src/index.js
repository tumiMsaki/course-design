var ws = new WebSocket('ws://localhost:8000');
ws.addEventListener('open', function (event) {
  ws.send('Hello Server!');
});
function component() {
  let element = document.createElement("div")
  element.innerHTML = "xxxxx"
  return element
}
const container = document.querySelector(".container")
let element = component()
if (container) {
  container.appendChild(element)
} else {
  console.error("container is null")
}
