const img = document.querySelector("img");

img.onmouseover = function() {
  const canvas = document.createElement("canvas");
  canvas.width = this.width;
  canvas.height = this.height;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(this, 0, 0, this.width, this.height);

  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;

  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i];
    data[i + 1] = 255 - data[i + 1];
    data[i + 2] = 255 - data[i + 2];
  }

  ctx.putImageData(imgData, 0, 0);
  this.src = canvas.toDataURL();
};
