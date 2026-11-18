
let dungeon;
let room;
let roomImg;
let character;
let charImg;
let fireImg;
let iceImg;
let grassImg;
let classSelection;
let isSelectingClass = true;
let roomData;

function preload() {
  roomImg = loadImage("src/assets/Room.png");
  charImg = loadImage("src/assets/character.png");
}

function setup() {
  createCanvas(960, 640); //width, height

  // Generate the dungeon
  dungeon = new Dungeon();
  dungeon.generateDungeon();

  // Create the room background renderer
  room = new Room(roomImg, roomData);

  // Create the player
  character = new Character(charImg);

  // Character class selection
  classSelection = new ClassSelection();

  // Start in the starting room
  character.setRoom(dungeon.rooms[0]);
  noSmooth(); // keep this last please
}

function draw() {
  background(35);

  cursor("src/assets/Cursor.png")
  //room.loadRoom();
  room.loadRoom(character.currentRoom);

  if (isSelectingClass) {
    classSelection.draw();
  } else {
    character.movement(dungeon);
  }

  // Draw temporary doorway indicators
  room.drawDoors(character.currentRoom);

  
}


function keyPressed() {
  // Press R to regenerate the dungeon
  if (key === "i" || key === "I") {
    character.showHitbox = !character.showHitbox;
  }

  if (key === "r" || key === "R") {
    dungeon.generateDungeon();

    // Return the player to the starting room
    character.reset(dungeon.rooms[0]);
  }

  // Class selection buttons (Q, E, F)
  if (isSelectingClass) {
    if (key === "q" || key === "Q") {
      element = "fire";
      character.setClassStats();
      isSelectingClass = false;
    }
    if (key === "e" || key === "E") {
      element = "ice";
      character.setClassStats();
      isSelectingClass = false;
    }
    if (key === "f" || key === "F") {
      element = "grass";
      character.setClassStats();
      isSelectingClass = false;
    }
  }
}
