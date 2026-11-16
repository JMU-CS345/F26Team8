
let dungeon;
let room;
let roomImg;
let character;
let charImg;
let roomData;

function preload() {
  roomData = loadJSON("src/rooms.json");
  roomImg = loadImage("src/assets/DirtyDungeonTileMap.png");
  charImg = loadImage("src/assets/character.png");
}

function setup() {
  createCanvas(960, 640); //width, height

  // Generate the dungeon
  dungeon = new Dungeon();
  dungeon.generateDungeon();

  // Create the room background renderer
  room = new Room(roomImg);

  // Create the player
  character = new Character(charImg);

  // Start in the starting room
  character.setRoom(dungeon.rooms[0]);
  noSmooth(); //keep this last please
}

function draw() {
  background(35);

  //room.loadRoom();
  room.loadRoom(roomData.room6);

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
