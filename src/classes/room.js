
const ROOM_SIZE = 70;

class Room {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;

    this.connections = {
      up: false,
      down: false,
      left: false,
      right: false
    };
  }

  // Return room color based on its type
  getRoomColor() {
    switch (this.type) {
      case "starting":
        return color(60, 130, 230);

      case "treasure":
        return color(240, 195, 60);

      case "boss":
        return color(210, 65, 65);

      case "normal":
        return color(120, 120, 130);
    }
  }

  // Draw this room
  draw(x, y) {
    fill(this.getRoomColor());
    stroke(255);
    strokeWeight(2);

    rectMode(CENTER);
    rect(x, y, ROOM_SIZE, ROOM_SIZE);

    // Room label
    fill(255);
    noStroke();

    textAlign(CENTER, CENTER);
    textSize(11);

    text(this.type, x, y);
  }
}
