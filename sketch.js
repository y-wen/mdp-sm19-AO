var filteredWords = new Array();
var singleWord = new Array();
var allWords = new Array();
//var lowercaseWord = new Array();
var wordTag = new Array();
var timeCount = new Array();

let debug = false;
// A path object (series of connected points)
let path;
let vehicles = [];
let gif_createImg;
let flag = false;


function preload() {
  gif_createImg = createImg("vegetables.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  newPath();

  let lang = 'en-US';
  let speechRec = new p5.SpeechRec(lang, gotSpeech);
  let continuous = true;
  let interim = true;
  speechRec.start(continuous, interim);

  function gotSpeech() {
    if (speechRec.resultValue) {
      allWords.push(speechRec.resultString);
      var tokenizedWord = new RiString(speechRec.resultString);
      var temp = tokenizedWord.words();
      lengthAdd = temp.length;
      singleWord = singleWord.concat(temp);

      for (i = singleWord.length - lengthAdd; i < singleWord.length; i++) {

        if (analyzeTag(singleWord[i])) {

          if (filteredWords.indexOf(singleWord[i]) == -1) {
            var tags = RiTa.getPosTags(singleWord[i]);
            wordTag = wordTag.concat(tags);
            filteredWords.push(singleWord[i]);
            timeCount.push(1);
            newVehicle(width / 2, height - 100);

          } else {
            var timeIndex = filteredWords.indexOf(singleWord[i]);
            timeCount.splice(timeIndex, 1, timeCount[timeIndex] + 1);
            if (timeCount[timeIndex] < 150) {
              vehicles[timeIndex].sizeUp(timeCount[timeIndex] * 1.2);
            }
          }
        }



      } //for
    } //if(speechRec.resultValue)
  } //function gotSpeech
} //function setup

function draw() {
  background(255);
  // fill(0);
  // textSize(180);
  // text('size test',200,200);

  path.display();
  gif_createImg.position(450, 350);

  for (var i = 0; i < filteredWords.length; i++) {
    // Path following and separation are worked on in this function
    vehicles[i].applyBehaviors(vehicles, path);
    // Call the generic run method (update, borders, display, etc.)
    vehicles[i].fade(timeCount[i]);
    vehicles[i].run();
  }
}

function newPath() {
  // A path is a series of connected points
  // A more sophisticated path might be a curve
  path = new Path();
  let offset = 200;
  path.addPoint(offset, offset); //upper left
  path.addPoint(width - offset, offset); //upper right
  path.addPoint(width - offset, height / 1.5 - offset + 100); //lower right
  path.addPoint(offset, height / 1.5 - offset + 100); //lower left
}

function newVehicle(x, y) {
  let maxspeed = random(2, 4);
  let maxforce = 0.5;
  vehicles.push(new Vehicle(x, y, maxspeed, maxforce, singleWord[i]));
}

function keyPressed() {
  if (key == 'd') {
    debug = !debug;
  }
}
