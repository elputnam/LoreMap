//Lore map

let lore = [];
let system;
let i = 0;
let x;
let y;
let font;

//CCapture
//var capture = false; // default is to not capture frames, can be changed with button in browser
var capturer = new CCapture({
  format:'webm', 
  workersPath: 'js/',
  framerate: 30
});

function preload(){
  lore = loadStrings('data/mythemes.txt');
  font = loadFont('data/Monaco.ttf');
}

function setup() {
  createCanvas(1920, 1080);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(30);
  x = width/2;
  y = height/2;
  background(0);
}

function draw() {
    if (frameCount==1){
    capturer.start();
  };
  background(random(360), 100, 100, 1);
  stroke(0);
  noFill();
  rectMode(CENTER);
  rect(x, y, 300, 100);
  fill(0); 
  textFont(font);
  textSize(random(10,20));
  textAlign(CENTER);
  text(lore[i], x, y); 
  i = floor(random(lore.length));
  x = random(width);
  y = random(height);

  capturer.capture(document.getElementById('defaultCanvas0'));  
  if (frameCount==9000){
    save_record();
  }
  print(frameCount);
}

function save_record() {
  capturer.save();
}