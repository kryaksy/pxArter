// Select color input
var color = document.querySelector('#colorPicker').value;

// Select size input
var N = document.querySelector('#inputHeight').value;
var M = document.querySelector('#inputWeight').value;

// When size is submitted by the user, call makeGrid()
document.querySelector('#sizePicker').addEventListener('submit', function(e) {
	e.preventDefault();
	makeGrid();
	console.log('submit listener works!');
});

function makeGrid() {

	// Your code goes here!
	console.log('makeGrid() works!');

}

// TEST: console.log(color, N, M);
