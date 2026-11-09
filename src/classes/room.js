
class Room {
    constructor(img) {
        this.img = img;
    }

    loadRoom() {
        imageMode(CORNER);
        image(this.img, 0, 0, 900, 900);
    }

    drawDoors(currentRoom) {
        if (!currentRoom) return;

        const doorSize = 140;
        const doorThickness = 15;

        rectMode(CENTER);
        noStroke();

        // Top doorway
        fill(currentRoom.connections.up ? "lime" : "red");
        rect(450, doorThickness / 2, doorSize, doorThickness);

        // Bottom doorway
        fill(currentRoom.connections.down ? "lime" : "red");
        rect(450, 900 - doorThickness / 2, doorSize, doorThickness);

        // Left doorway
        fill(currentRoom.connections.left ? "lime" : "red");
        rect(doorThickness / 2, 450, doorThickness, doorSize);

        // Right doorway
        fill(currentRoom.connections.right ? "lime" : "red");
        rect(900 - doorThickness / 2, 450, doorThickness, doorSize);
    }

}
