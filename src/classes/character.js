
const PLAYER_SIZE = 64;
const PLAYER_SPEED = 5;
const DOOR_WIDTH = 180;

let element = "";
// Collision dimensions are independent from the rendered sprite size.
const PLAYER_HITBOX_WIDTH = 42;
const PLAYER_HITBOX_HEIGHT = 34;
const PLAYER_HITBOX_OFFSET_Y = 10;

class Character {
  constructor(img) {
    this.img = img;
    this.element = element;
    
    this.x = 450;
    this.y = 450;

    this.size = PLAYER_SIZE;
    
    this.setClassStats();

    this.hitbox = {
      width: PLAYER_HITBOX_WIDTH,
      height: PLAYER_HITBOX_HEIGHT,
      offsetX: 0,
      offsetY: PLAYER_HITBOX_OFFSET_Y
    };
    this.showHitbox = false;

    this.currentRoom = null;
  }

  // Set's the player's stats to match their class (element)
  setClassStats() {
    switch (element) {
      case "fire":
        console.log("You are a fire mage!")
        this.img = fireImg;
        break;
      case "ice":
        console.log("You are an ice mage!")
        this.img = iceImg;
        break;
      case "grass":
        console.log("You are a grass mage!")
        this.img = grassImg;
        break;
    }
  }

  // Set the player's current room
  setRoom(room) {
    this.currentRoom = room;
  }

  // Return the hitbox in canvas coordinates, centered on the player.
  getHitbox() {
    return {
      left: this.x + this.hitbox.offsetX - this.hitbox.width / 2,
      right: this.x + this.hitbox.offsetX + this.hitbox.width / 2,
      top: this.y + this.hitbox.offsetY - this.hitbox.height / 2,
      bottom: this.y + this.hitbox.offsetY + this.hitbox.height / 2
    };
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

    // Check whether the player is aligned with the doorway
    let horizontalDoorRange = (DOOR_WIDTH - this.hitbox.width) / 2;
    let verticalDoorRange = (DOOR_WIDTH - this.hitbox.height) / 2;

    let aligned = false;

    if (direction === "left" || direction === "right") {
      aligned = Math.abs(this.y + this.hitbox.offsetY - height / 2) <= horizontalDoorRange;
    } else {
      aligned = Math.abs(this.x + this.hitbox.offsetX - width / 2) <= verticalDoorRange;
    }

    if (!aligned) {
      return false;
    }

    // Switch to the neighboring room
    this.currentRoom = nextRoom;

    // Place the player just inside the opposite doorway
    switch (direction) {
      case "left":
        this.x = width - 1 - this.hitbox.offsetX - this.hitbox.width / 2;
        break;

      case "right":
        this.x = 1 - this.hitbox.offsetX + this.hitbox.width / 2;
        break;

      case "up":
        this.y = height - 1 - this.hitbox.offsetY - this.hitbox.height / 2;
        break;

      case "down":
        this.y = 1 - this.hitbox.offsetY + this.hitbox.height / 2;
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

    // Move horizontally
    this.x += dx * PLAYER_SPEED;

    let bounds = this.getHitbox();

    if (bounds.left < 0) {
      if (!this.tryTransition(dungeon, "left")) {
        this.x -= bounds.left;
      }
    }

    bounds = this.getHitbox();
    if (bounds.right > width) {
      if (!this.tryTransition(dungeon, "right")) {
        this.x -= bounds.right - width;
      }
    }

    // Move vertically
    this.y += dy * PLAYER_SPEED;

    bounds = this.getHitbox();
    if (bounds.top < 0) {
      if (!this.tryTransition(dungeon, "up")) {
        this.y -= bounds.top;
      }
    }

    bounds = this.getHitbox();
    if (bounds.bottom > height) {
      if (!this.tryTransition(dungeon, "down")) {
        this.y -= bounds.bottom - height;
      }
    }

    // Draw the character
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.size, this.size);

    if (this.showHitbox) {
      const hitbox = this.getHitbox();
      push();
      noFill();
      stroke(0, 255, 0);
      strokeWeight(2);
      rectMode(CORNERS);
      rect(hitbox.left, hitbox.top, hitbox.right, hitbox.bottom);
      pop();
    }

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
