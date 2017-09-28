let song, img, canvas, amplitude, size, frequency, level, width, height, aqua;
function preload(){
  song = loadSound('assets/Ben_Pearce_What_I_Might_Do_Kilter_Remix.mp3');
  img  = loadImage('assets/pizza_steve.png')
}

function setup() {
  song.play()
  width = 1600;
  height = 800;
  canvas = createCanvas(width, height);
  frequency = new p5.FFT();
  amplitude = new p5.Amplitude()
  aqua = '#40d1f5'
  spinImage()
}

function draw() {
  freq = frequency.analyze()[0]
  amp = amplitude.getLevel()
  console.log(freq)
  f = map(freq, 0, 300, 0, 100);
  l = map(amp, 0, 1, 0, 100)
  fill(180)
  ellipse(width/2, height/2, f * 4, f * 4);
  fill(aqua)
  ellipse(width/4, height/4, l * 4, l * 4)
}

function spinImage() {
  image(img, 0, 0)
}
