let Black, Medium, Thin;
let chad, dog, drake;
let w = 500;
let h = 500;
let containerX1Slider, containerY1Slider, containerWidth1Slider, containerHeight1Slider, fontSize1Slider;
let containerX2Slider, containerY2Slider, containerWidth2Slider, containerHeight2Slider, fontSize2Slider;

let title1, title2;
let rSlider, gSlider, bSlider;
let choice1,choice2, choice3;

function preload() {
  
  Black = loadFont("fonts/Thunder-BlackLC.ttf");
  Medium = loadFont("fonts/Thunder-MediumLC.ttf");
  Thin= loadFont("fonts/Thunder-ThinLC.ttf");
  
  
  chad = loadImage("images/chad.jpg");
  dog = loadImage("images/dog.jpg");
  drake = loadImage("images/drake.jpg");

}

function setup() {
    let cnv = createCanvas(500,500);
    cnv.parent('column-two'); //sets <div id="column-two"></div> as parent container of the canvas

    fill("black");
  
    createP();

    let slctimg = createSpan("Select Meme Image: ");
    slctimg.parent('column-one'); 
    slctimg.class('txt'); 
    slctimg.id('txt1');

    dropdown1 = createSelect();
    dropdown1.option("chad");
    dropdown1.option("dog");
    dropdown1.option("drake");
    dropdown1.parent('column-one'); 
    dropdown1.class('imgs'); 
    dropdown1.id('img1');

    createP();
  
    let addText = createSpan("Add Text: ");
    addText.parent("column-one")
    addText.style("10px");
    addText.parent('column-one'); 
    addText.class('txt'); 
    addText.id('txt1');

    title1= createInput("Title 1");
    title1.style("margin-right", "10px");
    title1.parent('column-one'); 
    title1.class('tit'); 
    title1.id('tit1');

    title2= createInput("Title 2");
    title2.style("margin-right", "10px");
    title2.parent('column-one'); 
    title2.class('tit'); 
    title2.id('tit2');


    createP();

    let fontchoice = createSpan("Choose font:");
    fontchoice.parent('column-one'); 
    fontchoice.class('txt'); 
    fontchoice.id('txt1');
    radio1 = createRadio();
    radio1.option("Black");
    radio1.option("Medium");
    radio1.option("Thin");
    radio1.parent('column-one'); 
    radio1.class('radio'); 
    radio1.id('radio1');

    createP();

    let outline = createSpan("Outlines of Title Containers:");
    outline.parent('column-one'); 
    outline.class('txt'); 
    outline.id('txt1');
    radio2 = createRadio();
    radio2.option("Show");
    radio2.option("Hide");
    radio2.parent('column-one'); 
    radio2.class('radio'); 
    radio2.id('radio1');

    createP(); 
    let t1c= createSpan("Adjust Title 1 Container:");
    t1c.parent('column-one'); 
    t1c.class('txt'); 
    t1c.id('txt1');

    let x1= createSpan("X1: ");
    x1.parent('column-one'); 
    x1.class('txt'); 
    x1.id('txt1');

    containerX1Slider = createSlider(0, 400, 270);
    containerX1Slider.parent('column-one'); 
    containerX1Slider.class('slider'); 
    containerX1Slider.id('sliderx1');

    let y1= createSpan("Y1: ");
    y1.parent('column-one'); 
    y1.class('txt'); 
    y1.id('txt1');

    containerY1Slider = createSlider(0, 400, 80);
    containerY1Slider.parent('column-one'); 
    containerY1Slider.class('slider'); 
    containerY1Slider.id('slidery1');

    let Width1= createSpan("Width1: ");
    Width1.parent('column-one'); 
    Width1.class('txt'); 
    Width1.id('txt1');

    containerWidth1Slider = createSlider(50, 300, 200);
    containerWidth1Slider.parent('column-one'); 
    containerWidth1Slider.class('slider'); 
    containerWidth1Slider.id('sliderw1');

    let Height1= createSpan("Height1: ");
    Height1.parent('column-one'); 
    Height1.class('txt'); 
    Height1.id('txt1');

    containerHeight1Slider = createSlider(50, 200, 100);
    containerHeight1Slider.parent('column-one'); 
    containerHeight1Slider.class('slider'); 
    containerHeight1Slider.id('sliderh1');

    let Size1= createSpan("Size1: ");
    Size1.parent('column-one'); 
    Size1.class('txt'); 
    Size1.id('txt1');

    fontSize1Slider = createSlider(10, 50, 40);
    fontSize1Slider.parent('column-one'); 
    fontSize1Slider.class('slider'); 
    fontSize1Slider.id('sliderf1');
   
    createP(); 
    let t2c= createSpan("Adjust Title 2 Container:");
    t2c.parent('column-one'); 
    t2c.class('txt'); 
    t2c.id('txt1');

    let x2= createSpan("X2: ");
    x2.parent('column-one'); 
    x2.class('txt'); 
    x2.id('txt1');

    containerX2Slider = createSlider(0, 400, 270);
    containerX2Slider.parent('column-one'); 
    containerX2Slider.class('slider'); 
    containerX2Slider.id('sliderx2');

    let y2= createSpan("Y2: ");
    y2.parent('column-one'); 
    y2.class('txt'); 
    y2.id('txt1');

    containerY2Slider = createSlider(0, 400, 330);
    containerY2Slider.parent('column-one'); 
    containerY2Slider.class('slider'); 
    containerY2Slider.id('slidery2');

    let Width2= createSpan("Width2: ");
    Width2.parent('column-one'); 
    Width2.class('txt'); 
    Width2.id('txt1');

    containerWidth2Slider = createSlider(50, 300, 200);
    containerWidth2Slider.parent('column-one'); 
    containerWidth2Slider.class('slider'); 
    containerWidth2Slider.id('sliderw2');

    let Height2= createSpan("Height2: ");
    Height2.parent('column-one'); 
    Height2.class('txt'); 
    Height2.id('txt1');

    containerHeight2Slider = createSlider(50, 200, 100);
    containerHeight2Slider.parent('column-one'); 
    containerHeight2Slider.class('slider'); 
    containerHeight2Slider.id('sliderh2');

    let Size2= createSpan("Size2: ");
    Size2.parent('column-one'); 
    Size2.class('txt'); 
    Size2.id('txt1');
    
    fontSize2Slider = createSlider(10, 50, 40);
    fontSize2Slider.parent('column-one'); 
    fontSize2Slider.class('slider'); 
    fontSize2Slider.id('sliderf2');
  

    createP(); 
    let RGB= createSpan("Adjust RGB values of the Font Color:");
    RGB.parent('column-one'); 
    RGB.class('txt'); 
    RGB.id('txt1');

    let red = createSpan("Red: ");
    red.parent('column-one'); 
    red.class('txt'); 
    red.id('txt1');

    rSlider = createSlider(0, 256, 0);
    rSlider.parent('column-one'); 
    rSlider.class('slider'); 
    rSlider.id('rslider');

    let green = createSpan("Green: ");
    green.parent('column-one'); 
    green.class('txt'); 
    green.id('txt1');

    gSlider = createSlider(0, 256, 0);
    gSlider.parent('column-one'); 
    gSlider.class('slider'); 
    gSlider.id('gslider');

    let blue = createSpan("Blue: ");
    blue.parent('column-one'); 
    blue.class('txt'); 
    blue.id('txt1');
    
    bSlider = createSlider(0, 256, 0);
    bSlider.parent('column-one'); 
    bSlider.class('slider'); 
    bSlider.id('bslider');
  
    createP();
    let btn= createButton("Save Image");
    btn.parent('column-one'); 
    btn.class('btn'); 
    btn.id('btn1');
    btn.style("margin-left", "200px");
    btn.style("margin-top", "10px");
    btn.mousePressed(saveimg); //created function
  
    function saveimg(){
      saveCanvas(cnv, "\\", "jpeg")
    }
  }
  
  function draw() {
    background('black');
    
    // Get values from input
    let val1 = title1.value();
    let val2 = title2.value();
    
    // Get value from dropdown
    
    choice1 = dropdown1.value();
    if (choice1 === "chad") {
      image(chad, 0, 0, w, h);
    } if (choice1 === "dog") {
      image(dog, 0, 0, w, h);
    } if (choice1 === "drake") {
      image(drake, 0, 0, w, h);
    } 
  
      // Get values from sliders
    let containerX1 = containerX1Slider.value();
    let containerY1 = containerY1Slider.value();
    let containerWidth1 = containerWidth1Slider.value();
    let containerHeight1 = containerHeight1Slider.value();
    let fontSize1 = fontSize1Slider.value();
    
    let containerX2 = containerX2Slider.value();
    let containerY2 = containerY2Slider.value();
    let containerWidth2 = containerWidth2Slider.value();
    let containerHeight2 = containerHeight2Slider.value();
    let fontSize2 = fontSize2Slider.value();
    
  
    let valR = rSlider.value();
    let valG = gSlider.value();
    let valB = bSlider.value();
  
    
    choice2 = radio1.value();
    if (choice2 === "Black") {
      textFont(Black);
    } if (choice2 === "Medium") {
      textFont(Medium);
    } else if (choice2 === "Thin") {
      textFont(Thin);
    }
    
      choice3 = radio2.value();
    if (choice3 === "Show") {
      stroke(0);
    } else if (choice3 === "Hide") {
      noStroke();
    }
  
    // Draw the text container 1
    noFill();
    rect(containerX1, containerY1, containerWidth1, containerHeight1);
    
    // text inside the container 1
    fill(valR, valG, valB);
    noStroke();
    textSize(fontSize1);
    textAlign(CENTER, CENTER);
    text(val1, containerX1, containerY1, containerWidth1,containerHeight1);
    
  
    if (choice3 === "Show") {
      stroke(0);
    } else if (choice3 === "Hide") {
      noStroke();
    } 
    
     // Draw the text container 2
    noFill();
    rect(containerX2, containerY2, containerWidth2, containerHeight2);
    
    // text inside the container 2
    fill(valR, valG, valB);
    noStroke();
    textSize(fontSize2);
    textAlign(CENTER, CENTER);
    text(val2, containerX2, containerY2, containerWidth2,containerHeight2);
    
  }
  