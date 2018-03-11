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
  const submitStart = performance.now();
  e.preventDefault();
  const preventDef = performance.now();

  pxCanvas.innerHTML = "";
  const clearEnd = performance.now();
  makeGrid();
  const makeGridEnd = performance.now();
  body.style.paddingTop = '0';
  const paddingTopEnd = performance.now();
  drawPx();
  const drawPxEnd = performance.now();
  var preventDefInterval = Math.floor((preventDef - submitStart) * 1000);
  var clearEndInterval = Math.floor(clearEnd - preventDef);
  var makeGridInterval = Math.floor(makeGridEnd - clearEnd);
  var drawPxInterval = Math.floor(drawPxEnd - makeGridEnd);
  console.log("Prevent Default: \t" + preventDefInterval + "ms\n" + "Clear Table: \t\t" + clearEndInterval + "ms\n" + "Grid Making: \t\t" + makeGridInterval + "ms\n" + "drawPx: \t\t\t" + drawPxInterval + "ms\n");

});

// Drawing
function drawPx() {
  let mouseIsDown = false;

  pxCanvas.addEventListener('mousemove', function(e) {
    mouseIsDown && makePx(e);
  });

  pxCanvas.addEventListener('click', function(e) {
    makePx(e);
  });

  pxCanvas.addEventListener('mousedown', function() {
    mouseIsDown = true;
  });

  pxCanvas.addEventListener('mouseup', function() {
    mouseIsDown = false;
  });
}

// Make Grid
function makeGrid() {

  const N = canvasHeight.value;
  const M = canvasWidth.value;
  const tBody = document.createDocumentFragment();
  var cellSize = Math.floor(window.innerWidth / M);

  for (var i = 0; i < N; i++) {
    let newTR = document.createElement('tr');
    for (var j = 0; j < M; j++) {
      let newTD = document.createElement('td');
      window.td = newTD;
      newTD.style.height = cellSize + "px";
      newTD.style.width = cellSize + "px";
      newTR.appendChild(newTD);
    }
    tBody.appendChild(newTR);
  }
  pxCanvas.appendChild(tBody);
}

// Make Pixel
function makePx(e) {
  e.target.style.backgroundColor = pxColor.value;
  e.target.style.border = "1px dotted" + pxColor.value;
}