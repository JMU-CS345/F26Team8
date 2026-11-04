
const ROOM_SIZE = 80;
const MAX_ROOMS = 15;

let rooms = [];

function setup() {
  createCanvas(800, 800);
  generateDungeon();
}

function generateDungeon() {
  rooms = [];

  // Start in the center
  rooms.push(createRoom(0, 0));

  let directions = [
    { x: 0, y: -1, name: "up", opposite: "down" },
    { x: 0, y: 1, name: "down", opposite: "up" },
    { x: -1, y: 0, name: "left", opposite: "right" },
    { x: 1, y: 0, name: "right", opposite: "left" }
  ];

  while (rooms.length < MAX_ROOMS) {

    // Pick a random existing room
    let parent = random(rooms);

    // Pick a random direction
    let direction = random(directions);

    let newX = parent.x + direction.x;
    let newY = parent.y + direction.y;

    // Check if the position is occupied
    let occupied = rooms.some(room =>
      room.x === newX && room.y === newY
    );

    if (!occupied) {

      let newRoom = createRoom(newX, newY);

      // Connect the rooms
      parent.connections[direction.name] = true;
      newRoom.connections[direction.opposite] = true;

      rooms.push(newRoom);
    }
  }
}

function createRoom(x, y) {
  return {
    x: x,
    y: y,
    connections: {
      up: false,
      down: false,
      left: false,
      right: false
    },
    type: "normal"
  };
}

function draw() {
  background(35);

  // Draw rooms
  for (let room of rooms) {
    let screenX = width / 2 + room.x * ROOM_SIZE;
    let screenY = height / 2 + room.y * ROOM_SIZE;

    fill(100, 170, 120);
    stroke(255);
    rect(screenX, screenY, ROOM_SIZE, ROOM_SIZE);

    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    text(room.type, screenX + ROOM_SIZE / 2,
         screenY + ROOM_SIZE / 2);
  }
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    generateDungeon();
  }
}
