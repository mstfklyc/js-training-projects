const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const clear = document.getElementById("clear")
const increase = document.getElementById("increase")
const decrease = document.getElementById("decrease")
const sizeOfSelector = document.getElementById("size")
const colorOfDrawing = document.getElementById("color")

let size = 20
let isPressed = false
let color = 'black'
let x

let y
setInterval(() => {
    sizeOfSelector.innerHTML = size

}, 100);
colorOfDrawing.addEventListener("input", () => {
    color = colorOfDrawing.value
})



increase.addEventListener("click", () => {
    if (size >= 50) {
        return 50
    }
    size += 5
    console.log(size)
})

decrease.addEventListener("click", () => {

    if (size <= 5) {
        return 5
    }
    size -= 5
    sizeOfSelector.innerHTML = size
    console.log(size)
})


canvas.addEventListener("mousedown", (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY


})
canvas.addEventListener("mouseup", (e) => {
    isPressed = false
    x = undefined
    y = undefined

})
canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2
    }


})
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, true)
    ctx.fillStyle = color
    ctx.fill()
}

clear.addEventListener("click", () => {

    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    isPressed = false
    x = undefined
    y = undefined
    x2 = undefined
    y2 = undefined
})



function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()

}
