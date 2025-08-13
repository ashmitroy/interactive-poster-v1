function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(48);
}

function draw() {
  background(20);

  fill(255);
  text("Ashmit's Motion Poster", width / 2, height / 2);

  noStroke();
  fill(255, 100, 200, 150);
  ellipse(mouseX, mouseY, 40, 40);
}

function mousePressed() {
  background(random(255), random(255), random(255));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
