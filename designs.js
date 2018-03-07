// Select color input
var pxColor = document.querySelector('#colorPicker');


// Select size input
var N = document.querySelector('#inputHeight');
var M = document.querySelector('#inputWidth');


// Select Elements
const pxCanvas = document.querySelector('#pixelCanvas');


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

	pxCanvas.innerHTML = "";
	for (var i = 0; i < N.value; i++) {

		let newTR = document.createElement('tr');
		pxCanvas.appendChild(newTR);
		for (var j = 0; j < M.value; j++) {

			let newTD = document.createElement('td');
			pxCanvas.getElementsByTagName('tr')[i].appendChild(newTD);

		}

	}

}


// Make Pixel
function makePx(e) {

	e.target.style.backgroundColor = pxColor.value;

}
