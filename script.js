// Get a reference to the image element
const img = document.querySelector('img');

// Add an event listener for the click event
img.addEventListener('click', function(event) {
  // Get the mouse coordinates relative to the image element
  const x = event.offsetX;
  console.log("x is  :  " + x);
  const y = event.offsetY;
  console.log("y is  : "  + y);

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
  console.log(r);
  const g = Math.floor(Math.random() * 256);
  console.log(g);
  const b = Math.floor(Math.random() * 256);
  console.log(b);
  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
  //ctx.fillStyle = "rgb(r,g,b)";
  console.log(ctx.fillStyle);
  ctx.fillRect(x, y, 1, 1);

  // Replace the image with the colored version
  img.src = canvas.toDataURL();
  //console.log(img.src);
});
