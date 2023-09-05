let song1,song2,song3,song4,song5,song6,song7;
let fft;
let canvas;
let rSlider, gSlider, bSlider;
let bgColor = 0;
let isPlaying = false;
let trailColor;
let buffer; // Off-screen graphics buffer for persistent trail
let dropdown;
let windowHeight = 550;
let windowWidth = 1200;

function preload() {
  // Load your songs here
  song1 = loadSound("audio/Plini - _Electric Sunrise_ (2016).mp3");
  song2 = loadSound("audio/Buzzard Song (Mono Version).mp3");
  song3 = loadSound("audio/Le Festin.mp3");
  song4 = loadSound("audio/MEUTE - Endling.mp3");
  song5 = loadSound("audio/Pink Floyd - The Great Gig In The Sky (2011 Remastered).mp3");
  song6 = loadSound("audio/See You Again (Clean) - Tyler, The CreatorKali Uchis.mp3");
  song7 = loadSound("audio/Yeh Hai Bombay Meri Jaan - Johnny Walker, Mohd Rafi, Geeta Dutt, CID Song.mp3");
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas')
  canvas.style('display', 'block');
  canvas.style('margin', 'auto');
  
  fft = new p5.FFT();
  trailColor = color(255, 255, 255); // Initialize trail color with full opacity

   // Create dropdown button
   dropdown = createSelect();
   dropdown.option('Electric Sunrise - Plini');
   dropdown.option('Buzzard Song - Miles Davis');
   dropdown.option('Le Festin');
   dropdown.option('Endling - MEUTE');
   dropdown.option('The Great Gig In The Sky - Pink Floyd');
   dropdown.option('See You Again - Tyler, The Creator');
   dropdown.option('Yeh Hai Bombay Meri Jaan - Mohd Rafi');
   dropdown.parent('controls')
   
  
    //playPauseButton.position(20,height+20)
    //saveButton.position(120,height+20)
    //dropdown.position(220,height+23)
  
    // Create an off-screen graphics buffer for the persistent trail
    buffer = createGraphics(width, height);

    
    // Play the default song when the sketch starts
    song = song1;
    song.onended(songEnded);
    //song.play();
    
    // Detect when dropdown option changes
    dropdown.changed(changeSong);

    createP();

    // Create play/pause button
   let playPauseButton = createButton('Play/Pause');
   playPauseButton.mousePressed(togglePlay);
   playPauseButton.parent('controls');

   createP();

   // Create save button
   let saveButton = createButton('Save Image');
   saveButton.mousePressed(saveImage);
   saveButton.parent('controls');

   createP();

   let refreshButton = createButton('Refresh');
   refreshButton.mousePressed(refreshCanvas);
   refreshButton.parent('controls');

   createP();

    // Create RGB sliders
   rSlider = createSlider(0, 255, 255);
   rSlider.parent('controls')
   rSlider.class('slider')
   rSlider.id('slider1')

   gSlider = createSlider(0, 255, 0);
   gSlider.parent('controls')
   gSlider.class('slider')
   gSlider.id('slider2')

   bSlider = createSlider(0, 255, 0);
   bSlider.parent('controls')
   bSlider.class('slider')
   bSlider.id('slider3')
  }
  
  function draw() {
    background(0);
    
    // Get the FFT data from the song
    let spectrum = fft.analyze();
    
    // Update the trail color based on RGB sliders
    trailColor = color(rSlider.value(), gSlider.value(), bSlider.value(), 16);
    
    // Draw the graph on the buffer
    buffer.stroke(trailColor);
    buffer.noFill();
    buffer.beginShape();
    
      for (let i = 0; i < spectrum.length; i++) {
        let x = map(i, 0, spectrum.length, 0, width+500);
        let y = map(spectrum[i], 0, 255, height, 0); // Invert the y-axis
        buffer.vertex(x, y);
        blendMode(HARD_LIGHT);
      }
      buffer.endShape();
      
      // Composite the buffer onto the canvas
      image(buffer, 0, 0);

}
  
function togglePlay() {
if (song.isPlaying()) {
song.pause();
isPlaying = false;
} else {
song.play();
isPlaying = true;
}
}

function changeSong() {
if (dropdown.value() === 'Electric Sunrise - Plini') {
song.stop();
song = song1;
} 
else if (dropdown.value() === 'Buzzard Song - Miles Davis') {
song.stop();
song = song2;
}
else if (dropdown.value() === 'Le Festin') {
song.stop();
song = song3;
}
else if (dropdown.value() === 'Endling - MEUTE') {
song.stop();
song = song4;
}
else if (dropdown.value() === 'The Great Gig In The Sky - Pink Floyd') {
song.stop();
song = song5;
}
else if (dropdown.value() === 'See You Again - Tyler, The Creator') {
song.stop();
song = song6;
}
else if (dropdown.value() === 'Yeh Hai Bombay Meri Jaan - Mohd Rafi') {
song.stop();
song = song7;
}

refreshCanvas();

// Play the selected song
song.onended(songEnded);
song.play();

// Reset play/pause button state
isPlaying = true;
}

function songEnded() {
isPlaying = false;
}

function saveImage() {
saveCanvas(canvas, 'song_spectrum.png');
}

function windowResized() {
// Resize the canvas when the window is resized
resizeCanvas(windowWidth, windowHeight);
buffer.resizeCanvas(windowWidth, windowHeight);
}

function refreshCanvas() {
  // Clear the canvas and buffer
  clear();
  buffer.clear();
}