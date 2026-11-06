
let dungeon;
let room;
let roomImg;
let character;
let charImg;

function preload() {
  roomImg = loadImage("assets/Room.png");
  charImg = loadImage("assets/character.png");
}

function setup() {
  createCanvas(900, 900);
  
  //dungeon = new Dungeon();
  //dungeon.generateDungeon();
  room = new Room(roomImg);
  character = new Character(charImg);
  background(35);
  room.loadRoom();
  
}

function draw() {
  background(35);
  room.loadRoom();
  //dungeon.draw();
  
  character.movement();
}

// Press R to regenerate
function keyPressed() {
  if (key === "r" || key === "R") {
    dungeon.generateDungeon();
  }
}
