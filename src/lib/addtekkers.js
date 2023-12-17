// Each technique will be an object with x, y, width, height, and name properties
export const  techniques = [];
export const  currentDragIndex = -1; // The index of the technique currently being dragged

// Function to add a new technique
export function addTechnique(name) {
  // Add a new technique to the array with a default position and size
  techniques.push({
    x: 10,
    y: 10 + techniques.length * 110, // Stacking techniques vertically without overlap
    width: 150,
    height: 100,
    name: name
  });
  drawTechniques(); // Redraw all techniques
}

// Function to draw all techniques
export function drawTechniques() {
  const canvas = document.getElementById('myCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    // Draw each technique
    techniques.forEach(technique => {
      ctx.fillStyle = 'green';
      ctx.fillRect(technique.x, technique.y, technique.width, technique.height);
      ctx.font = '20px Arial';
      ctx.fillStyle = 'black';
      ctx.fillText(technique.name, technique.x + 10, technique.y + 30);
    });
  } else {
    console.error('Canvas element not found!');
  }
}

// Function to check if a mouse position is inside a rectangle
export function isInside(pos, rect){
  return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y;
}

// Mouse event handlers
export function onMouseDown(e) {
  const mousePos = { x: e.clientX, y: e.clientY };
  
  // Check if we clicked on any technique
  for (let i = 0; i < techniques.length; i++) {
    if (isInside(mousePos, techniques[i])) {
      currentDragIndex = i;
      break;
    }
  }
}

export function onMouseMove(e) {
  if (currentDragIndex >= 0) {
    // Move the technique with the mouse
    techniques[currentDragIndex].x = e.clientX - techniques[currentDragIndex].width / 2;
    techniques[currentDragIndex].y = e.clientY - techniques[currentDragIndex].height / 2;
    drawTechniques(); // Redraw all techniques
  }
}

export function onMouseUp(e) {
  currentDragIndex = -1; // Stop dragging
}


export function initCanvas(canvas) {
    if (canvas) {
      canvas.addEventListener('mousedown', onMouseDown);
      canvas.addEventListener('mousemove', onMouseMove);
      canvas.addEventListener('mouseup', onMouseUp);
    }
  }
