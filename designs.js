// Select color input
const pxColor = document.querySelector('#colorPicker');

// Select size input
var canvasHeight = document.querySelector('#inputHeight');
var canvasWidth = document.querySelector('#inputWidth');

// Select Elements
const pxCanvas = document.querySelector('#pixelCanvas');
const body = document.querySelector('body');

// When size is submitted by the user, call makeGrid()
document.querySelector('#sizePicker').addEventListener('submit', function(e) {
	e.preventDefault();
	makeGrid();
});

// Continuous Drawing

let mouseIsDown = false;

document.querySelector('#pixelCanvas').addEventListener('mousemove', function (e) {
  if (mouseIsDown) {
		makePx(e);
	}
});

document.querySelector('#pixelCanvas').addEventListener('mousedown', function () {
	mouseIsDown = true;
});

document.querySelector('#pixelCanvas').addEventListener('mouseup', function () {
  mouseIsDown = false;
});

// Make Grid
function makeGrid() {
	const N = canvasHeight.value;
	const M = canvasWidth.value;
	var cellSize = Math.floor(window.innerWidth / M);
	pxCanvas.innerHTML = "";

	for (var i = 0; i < N; i++) {
		let newTR = document.createElement('tr');
		pxCanvas.appendChild(newTR);

		for (var j = 0; j < M; j++) {
			let newTD = document.createElement('td');
			window.td = newTD;
			newTD.style.height = cellSize + "px";
			newTD.style.width = cellSize + "px";
			pxCanvas.getElementsByTagName('tr')[i].appendChild(newTD);
		}
	}
	body.style.backgroundColor = pxColor.value/10;
}

// Make Pixel
function makePx(e) {
	e.target.style.backgroundColor = pxColor.value;
}
