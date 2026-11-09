
const GRID_SPACING = 110;

const MAX_ROOMS = 15;
const NORMAL_ROOMS = MAX_ROOMS - 3;

class Dungeon {
  constructor() {
    this.rooms = [];

    this.directions = [
      { x: 0, y: -1, name: "up", opposite: "down" },
      { x: 0, y: 1, name: "down", opposite: "up" },
      { x: -1, y: 0, name: "left", opposite: "right" },
      { x: 1, y: 0, name: "right", opposite: "left" }
    ];
  }

  isOccupied(x, y) {
    return this.rooms.some(room =>
      room.x === x && room.y === y
    );
  }

  getAvailablePositions() {
    let available = [];

    for (let room of this.rooms) {
      for (let direction of this.directions) {
        let newX = room.x + direction.x;
        let newY = room.y + direction.y;

        if (this.isOccupied(newX, newY)) {
          continue;
        }

        let neighbors = 0;

        for (let dir of this.directions) {
          if (this.isOccupied(newX + dir.x, newY + dir.y)) {
            neighbors++;
          }
        }

        if (neighbors === 1) {
          available.push({
            x: newX,
            y: newY,
            parent: room,
            direction: direction
          });
        }
      }
    }

    return available;
  }

  addRoom(position, type) {
    let newRoom = new RoomGen(
      position.x,
      position.y,
      type
    );

    let direction = position.direction;

    position.parent.connections[direction.name] = true;
    newRoom.connections[direction.opposite] = true;

    this.rooms.push(newRoom);
  }

  generateDungeon() {
    this.rooms = [];

    // Create starting room
    this.rooms.push(new RoomGen(0, 0, "starting"));

    // Generate normal rooms
    for (let i = 0; i < NORMAL_ROOMS; i++) {
      let available = this.getAvailablePositions();

      let position = random(available);

      this.addRoom(position, "normal");
    }

    // Generate treasure room
    let available = this.getAvailablePositions();
    let treasurePosition = random(available);

    this.addRoom(treasurePosition, "treasure");

    // Generate boss room
    available = this.getAvailablePositions();
    let bossPosition = random(available);

    this.addRoom(bossPosition, "boss");
  }

  // Find a room connected in the requested direction
  getNeighbor(currentRoom, direction) {
    let dir = this.directions.find(d => d.name === direction);

    if (!dir || !currentRoom.connections[direction]) {
      return null;
    }

    return this.rooms.find(room =>
      room.x === currentRoom.x + dir.x &&
      room.y === currentRoom.y + dir.y
    );
  }

  // Draw the dungeon map (useful for debugging)
  draw() {
    if (this.rooms.length === 0) return;

    let minX = Math.min(...this.rooms.map(r => r.x));
    let maxX = Math.max(...this.rooms.map(r => r.x));

    let minY = Math.min(...this.rooms.map(r => r.y));
    let maxY = Math.max(...this.rooms.map(r => r.y));

    let offsetX = width / 2 - ((minX + maxX) / 2) * GRID_SPACING;
    let offsetY = height / 2 - ((minY + maxY) / 2) * GRID_SPACING;

    stroke(255);
    strokeWeight(8);

    for (let room of this.rooms) {
      let x = offsetX + room.x * GRID_SPACING;
      let y = offsetY + room.y * GRID_SPACING;

      if (room.connections.right) {
        line(
          x + ROOM_SIZE / 2, y,
          x + GRID_SPACING - ROOM_SIZE / 2, y
        );
      }

      if (room.connections.down) {
        line(
          x, y + ROOM_SIZE / 2,
          x, y + GRID_SPACING - ROOM_SIZE / 2
        );
      }
    }

    for (let room of this.rooms) {
      let x = offsetX + room.x * GRID_SPACING;
      let y = offsetY + room.y * GRID_SPACING;

      room.draw(x, y);
    }
  }
}
