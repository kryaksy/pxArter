// Select color input
var colorPick = document.getElementById('colorPicker')

// Select size input
const getHeight = document.getElementById('inputHeight');
const getWeight = document.getElementById('inputWeight');


//
// Functions
//

//Make Grid Function
function makeGrid(x,y) {
	const pxCanvas = document.querySelector('#pixelCanvas');
	pxCanvas.innerHTML = "";
  for (var i = 0; i < x; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < y; j++) {
      var cell = document.createElement("td");
      row.appendChild(cell);
    }
    pxCanvas.appendChild(row);
  }
}

//Make Pixel Function
function makePx(e) {
	var colorInput = colorPick.value;
	e.target.style.backgroundColor = colorInput;
}


//
// Listeners
//

//Submit Listener
document.querySelector('#sizePicker').addEventListener('submit', function(e) {
  e.preventDefault();
  var N = getHeight.value;
  var M = getWeight.value;
  makeGrid(N,M);
});

//Make Pixel Listener
document.querySelector('#pixelCanvas').addEventListener('click', function (e) {
	makePx(e);
});
