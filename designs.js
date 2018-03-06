// Select color input

// Select size input

//
// Functions
//
function makeGrid(x,y) {
	const pxCanvas = document.querySelector('#pixelCanvas');
	pxCanvas.innerHTML = "";
  for (var i = 0; i < x; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < y; j++) {
      var col = document.createElement("td");
      row.appendChild(col);
    }
    pxCanvas.appendChild(row);
  }
}

function makePx(e) {
	var colorInput = document.getElementById('colorPicker').value;
	e.target.style.backgroundColor = colorInput;
}

//
// Listeners
//
document.querySelector('#sizePicker').addEventListener('submit', function(e){
  e.preventDefault();
	const N = document.getElementById('inputHeight').value;
	const M = document.getElementById('inputWeight').value;
  makeGrid(N,M);
});

document.querySelector('#pixelCanvas').addEventListener('click', function (e) {
	makePx(e);
});

// TODO: Color Listener
