// Select color input
var color = document.querySelector('#colorPicker').value;

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
