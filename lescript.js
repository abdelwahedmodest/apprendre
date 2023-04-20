// Get a reference to the image element
const img = document.querySelector('img');

// Add an event listener for the mouseover event
img.addEventListener('mouseover', function(event) {
  // Get the mouse coordinates relative to the image element
  const x = event.offsetX;
  const y = event.offsetY;

  // Create a canvas element to draw on
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;

  // Get the 2D context of the canvas
  const ctx = canvas.getContext('2d');

  // Draw the image on the canvas
  ctx.drawImage(img, 0, 0);

  // Get the color of the pixel at the mouse coordinates
  const pixelData = ctx.getImageData(x, y, 1, 1).data;

  // Set the color of the pixel to a random color
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
  ctx.fillRect(x, y, 20, 20);

  // Replace the image with the colored version
  img.src = canvas.toDataURL();

  // Debugging messages
  console.log(`Mouseover at (${x}, ${y})`);
  console.log(`Pixel color at (${x}, ${y}): rgba(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]}, ${pixelData[3]})`);
  console.log(`New pixel color at (${x}, ${y}): rgb(${r}, ${g}, ${b})`);
});
