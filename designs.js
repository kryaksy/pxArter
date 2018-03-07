// Select color input
var color = document.querySelector('#colorPicker').value;

// Select size input
var N = document.querySelector('#inputHeight');
var M = document.querySelector('#inputWidth');

// Select Elements
const pxCanvas = document.querySelector('#pixelCanvas');

// Create Elements
const newTR = document.createElement('tr');
const newTD = document.createElement('td');

// When size is submitted by the user, call makeGrid()
document.querySelector('#sizePicker').addEventListener('submit', function(e) {

	e.preventDefault();
	makeGrid();

	// TEST: console.log('submit listener works!');
});

function makeGrid() {

	// Your code goes here!
	for (var i = 0; i < N.value; i++) {
		// TODO: Append TR to pxCanvas
		for (var j = 0; j < M.value; j++) {

			// TODO: Append TD to TR.lastChild

			// TEST: console.log(i,j);

		}

	}
	// TEST: console.log('makeGrid() works!');

}

// TEST: console.log(color, N, M);
