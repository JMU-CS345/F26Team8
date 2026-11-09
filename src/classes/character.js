
const PLAYER_SIZE = 70;
const PLAYER_SPEED = 5;
const DOOR_WIDTH = 180;

class Character {
  constructor(img) {
    this.img = img;

    this.x = 450;
    this.y = 450;

    this.size = PLAYER_SIZE;

    this.currentRoom = null;
  }

  // Set the player's current room
  setRoom(room) {
    this.currentRoom = room;
  }

  // Reset the player to the starting room
  reset(startingRoom) {
    this.x = 450;
    this.y = 450;

    this.currentRoom = startingRoom;
  }

  // Check whether the player can enter another room
  tryTransition(dungeon, direction) {
    let nextRoom = dungeon.getNeighbor(
      this.currentRoom,
      direction
    );

    // No connected room exists
    if (nextRoom === null) {
      return false;
    }

    let halfSize = this.size / 2;

    // Check whether the player is aligned with the doorway
    let doorRange = (DOOR_WIDTH - this.size) / 2;

    let aligned = false;

    if (direction === "left" || direction === "right") {
      aligned = Math.abs(this.y - height / 2) <= doorRange;
    } else {
      aligned = Math.abs(this.x - width / 2) <= doorRange;
    }

    if (!aligned) {
      return false;
    }

    // Switch to the neighboring room
    this.currentRoom = nextRoom;

    // Place the player just inside the opposite doorway
    switch (direction) {
      case "left":
        this.x = width - halfSize - 1;
        break;

      case "right":
        this.x = halfSize + 1;
        break;

      case "up":
        this.y = height - halfSize - 1;
        break;

      case "down":
        this.y = halfSize + 1;
        break;
    }

    return true;
  }

  // Player movement
  movement(dungeon) {
    let dx = 0;
    let dy = 0;

    // Get movement input
    if (keyIsDown(LEFT_ARROW)) {
      dx--;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      dx++;
    }

    if (keyIsDown(UP_ARROW)) {
      dy--;
    }

    if (keyIsDown(DOWN_ARROW)) {
      dy++;
    }

    // Normalize diagonal movement
    if (dx !== 0 && dy !== 0) {
      dx *= Math.SQRT1_2;
      dy *= Math.SQRT1_2;
    }

    let halfSize = this.size / 2;

    // Move horizontally
    this.x += dx * PLAYER_SPEED;

    if (this.x < halfSize) {
      if (!this.tryTransition(dungeon, "left")) {
        this.x = halfSize;
      }
    }

    if (this.x > width - halfSize) {
      if (!this.tryTransition(dungeon, "right")) {
        this.x = width - halfSize;
      }
    }

    // Move vertically
    this.y += dy * PLAYER_SPEED;

    if (this.y < halfSize) {
      if (!this.tryTransition(dungeon, "up")) {
        this.y = halfSize;
      }
    }

    if (this.y > height - halfSize) {
      if (!this.tryTransition(dungeon, "down")) {
        this.y = height - halfSize;
      }
    }

    // Draw the character
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.size, this.size);

    // Display current room information (debugging)
    fill(255);
    noStroke();
    textAlign(LEFT, TOP);
    textSize(16);

    if (this.currentRoom !== null) {
      text(
        "Room: " + this.currentRoom.type,
        15,
        15
      );

      text(
        "Coordinates: " +
        this.currentRoom.x + ", " +
        this.currentRoom.y,
        15,
        35
      );
    }
  }
}
