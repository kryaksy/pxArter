// Select color input
const pxColor = document.querySelector('#colorPicker');

// Select size input
var canvasHeight = document.querySelector('#inputHeight');
var canvasWidth = document.querySelector('#inputWidth');

// Select Elements
const pxCanvas = document.querySelector('#pixelCanvas');
const body = document.querySelector('body');
const header = document.querySelector('header');
const h1 = document.querySelector('h1');

// When size is submitted by the user, call makeGrid()
document.querySelector('#sizePicker').addEventListener('submit', function(e) {
	e.preventDefault();
	makeGrid();
	body.style.paddingTop = '0';
	drawPx();
});

// Draw Pixel, Continuous Drawing
function drawPx() {
	let mouseIsDown = false;

	document.querySelector('#pixelCanvas').addEventListener('mousemove', function(e) {
		mouseIsDown && makePx(e);
	});

	document.querySelector('#pixelCanvas').addEventListener('click', function(e) {
		makePx(e);
	});

	document.querySelector('#pixelCanvas').addEventListener('mousedown', function() {
		mouseIsDown = true;
	});

	document.querySelector('#pixelCanvas').addEventListener('mouseup', function() {
		mouseIsDown = false;
	});
}

// Make Grid
function makeGrid() {
	const N = canvasHeight.value;
	const M = canvasWidth.value;
	var cellSize = Math.floor(window.innerWidth / M);

	pxCanvas.innerHTML = "";

	for (var i = 0; i < N; i++) {
		let newTR = document.createElement('tr');
		let load = Math.floor(i / (N - 1) * 100);
		pxCanvas.appendChild(newTR);
		for (var j = 0; j < M; j++) {
			let newTD = document.createElement('td');
			window.td = newTD;
			newTD.style.height = cellSize + "px";
			newTD.style.width = cellSize + "px";
			pxCanvas.getElementsByTagName('tr')[i].appendChild(newTD);
		}
		console.log('%' + load);
	}
	console.log('done');
}

// Make Pixel
function makePx(e) {
	e.target.style.backgroundColor = pxColor.value;
	e.target.style.border = "1px dotted" + pxColor.value;
}
