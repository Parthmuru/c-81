canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = "grey";
ctx.rect(150, 143, 430, 200);
ctx.stroke();