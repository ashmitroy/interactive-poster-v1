// --- simple style system ---
let palettes = [
  { bg:[20,20,24], dot:[255,100,200,180], text:[255,255,255] },
  { bg:[8,16,20],   dot:[120,240,255,180], text:[230,240,255] },
  { bg:[28,24,22],  dot:[255,180,90,190],  text:[255,240,220] }
];
let theme = 0;

// follower coords (smooth easing)
let fx, fy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(48);
  fx = width / 2;
  fy = height / 2;
}

function draw() {
  const p = palettes[theme];

  // translucent background for motion trail
  background(p.bg[0], p.bg[1], p.bg[2], 30);

  // ease towards mouse (lower factor = smoother)
  fx += (mouseX - fx) * 0.12;
  fy += (mouseY - fy) * 0.12;

  // title
  fill(p.text[0], p.text[1], p.text[2]);
  noStroke();
  text("Ashmit's Motion Poster", width/2, height/2);

  // main follower
  fill(p.dot[0], p.dot[1], p.dot[2], p.dot[3]);
  ellipse(fx, fy, 44, 44);
}

// click = quick burst
function mousePressed() {
  for (let i = 0; i < 12; i++) {
    const ang = (TWO_PI / 12) * i;
    const r = 60 + i*4;
    ellipse(fx + cos(ang)*r, fy + sin(ang)*r, 6, 6);
  }
}

// press 1/2/3 to switch palettes
function keyPressed() {
  if (key === '1') theme = 0;
  if (key === '2') theme = 1;
  if (key === '3') theme = 2;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
