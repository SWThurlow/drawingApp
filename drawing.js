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
    ctx.lineWidth = 10;
    ctx.lineTo(e.clientX, e.clientY);
    ctx.strokeStyle = '#000'
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
}