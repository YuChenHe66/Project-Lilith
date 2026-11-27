// ===== BLOCK 1: find the things on the page =====
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');   // ctx is the "pen" we draw with
const scoreText = document.getElementById('score');

// ===== BLOCK 2: game settings (change these later) =====
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
let score = 0;

// ===== BLOCK 3: drawing =====
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.fillStyle = '#3b9ac9';
  ctx.beginPath();
  ctx.arc(WIDTH / 2, 60, 22, 0, Math.PI * 2);  // a test ball at the top
  ctx.fill();
}

// ===== BLOCK 4: game loop =====
function loop() {
  draw();
  requestAnimationFrame(loop);   // repeat about 60 times per second
}
loop();
