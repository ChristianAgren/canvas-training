window.addEventListener('load', loadDrawArea)
window.addEventListener('resize', loadDrawArea)

function loadDrawArea() {
    const   canvas = document.querySelector('canvas'),
            context = canvas.getContext('2d');

    resizeCanvasToWindow(canvas)
    drawBall(context)
    drawShadow(context)
    drawLightReflection(context)
    drawWhiteCircle(context)
    drawEight(context)

}

function resizeCanvasToWindow(canvas) {
    const   body = document.querySelector('body')
    canvas.width = body.clientWidth
    canvas.height = body.clientHeight
}

/**
 * 
 * @param {CanvasRenderingContext2D} context 
 */
function drawBall(context) {
    context.beginPath()
    context.arc(300, 300, 175, 0, 2 * Math.PI)
    context.fill()
    context.closePath()
}

/**
 * 
 * @param {CanvasRenderingContext2D} context 
 */
function drawShadow(context) {
    context.fillStyle = '#0d0d0d'
    context.beginPath()
    context.arc(280, 280, 145, 0, 2 * Math.PI)
    context.fill()
    context.closePath()
}

/**
 * 
 * @param {CanvasRenderingContext2D} context 
 */
function drawLightReflection(context) {
    context.fillStyle = '#cccccc'
    context.beginPath()
    context.ellipse(200, 200, 20, 40, Math.PI / 4, 0, 2 * Math.PI)
    context.fill()
    context.closePath()
}

/**
 * 
 * @param {CanvasRenderingContext2D} context 
 */
function drawWhiteCircle(context) {
    context.fillStyle = 'white'
    context.beginPath()
    context.arc(300, 300, 75, 0, 2 * Math.PI)
    context.fill()
    context.closePath()
}

/**
 * 
 * @param {CanvasRenderingContext2D} context 
 */
function drawEight(context) {
    context.lineWidth = '6'
    context.beginPath()
    context.arc(300, 280, 20, 0, 2 * Math.PI)
    context.stroke()
    context.closePath()
    context.beginPath()
    context.arc(300, 320, 20, 0, 2 * Math.PI)
    context.stroke()
    context.closePath()
}

