// Select color input
var colorInput = document.getElementById('colorPicker').value;
var inputH = document.getElementById('inputHeight');
var inputW = document.getElementById('inputWeight');

// Select size input

//
// Functions
//
function makeGrid(x,y) {
  for (var i = 0; i < x; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < y; j++) {
      var column = document.createElement("td");
      row.appendChild(column);
    }
    document.querySelector('#pixelCanvas').appendChild(row);
  }
}

//
// Listeners
//
document.querySelector('#sizePicker').addEventListener('submit', function(e){
  e.preventDefault();
  const N = inputH.value;
  const M = inputW.value;
  makeGrid(N,M);
});

// TODO: Color Listener
