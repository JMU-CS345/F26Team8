
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

  // Generate the dungeon
  dungeon = new Dungeon();
  dungeon.generateDungeon();

  // Create the room background renderer
  room = new Room(roomImg);

  // Create the player
  character = new Character(charImg);

  // Start in the starting room
  character.setRoom(dungeon.rooms[0]);
}

function draw() {
  background(35);

  room.loadRoom();

  // Draw temporary doorway indicators
  room.drawDoors(character.currentRoom);

  character.movement(dungeon);
}

// Press R to regenerate the dungeon
function keyPressed() {
  if (key === "r" || key === "R") {
    dungeon.generateDungeon();

    // Return the player to the starting room
    character.reset(dungeon.rooms[0]);
  }
}
