/*Setting up the canvas.*/
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight * 0.8;
canvas.width = window.innerWidth * 0.8;

/*Mouse control event listeners.*/
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishPosition);
canvas.addEventListener('mousemove', draw);


/*Drawing functions*/

let painting = false;
let canStyle = getComputedStyle(canvas);
let canMargX = canStyle.getPropertyValue('margin-left').split('px');
let h1Style = getComputedStyle(document.querySelector('h1'));
let canMargY = h1Style.getPropertyValue('height').split('px');

/*Start and end positions*/

function startPosition(e) {
    painting = true;
    draw(e);
}

function finishPosition(e) {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;

    let x = e.clientX - parseFloat(canMargX[0]);
    let y = e.clientY - parseFloat(canMargY[0]);
    ctx.lineWidth = 10;
    ctx.lineTo(x, y);
    ctx.strokeStyle = '#000'
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}