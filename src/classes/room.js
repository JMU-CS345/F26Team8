
class Room {
    constructor(img) {
        this.img = img;
    }

    loadRoom() {
       
        imageMode(CORNER);
        image(this.img, 0, 0, 960, 640);
    }

    loadRoom(roomType) {
        for (let i = 0; i <= roomType.length; i++){
            for (let j = 0; j < roomType[i].length; j++){
                let curTile = roomType[i][j];
                switch (curTile){
                    case "":
                        image(this.img, (j * 64), (i * 64), 64, 64, 32, 32, 32, 32);
                        break;
                    case "1":
                        image(this.img,(j * 64), 0, 64, 64, 0, 0, 32, 32);
                        break;
                    case "2":
                        image(this.img,(j * 64), 0, 64, 64, 64, 0, 32, 32);
                        break;
                    case "3":
                        image(this.img,(j * 64), (i * 64), 64, 64, 0, 64, 32, 32);
                        break;
                    case "4":
                        image(this.img, (j * 64), (i * 64), 64, 64, 64, 64, 32, 32);
                        break;
                    case "T":
                        image(this.img, (j * 64), 0, 64, 64, 32, 0, 32, 32);
                        break;
                    case "B":
                        image(this.img, (j * 64),(i * 64), 64, 64, 32, 64, 32, 32);
                        break;
                    case "S1":
                        image(this.img, (j * 64),(i * 64), 64, 64, 0, 32, 32, 32);
                        break;
                    case "S2":
                        image(this.img, (j * 64),(i * 64), 64, 64, 64, 32, 32, 32);
                        break;
                }
                

            }
        }
    }

    drawDoors(currentRoom) {
        if (!currentRoom) return;

        const doorSize = 140;
        const doorThickness = 15;

        rectMode(CENTER);
        noStroke();

        // Top doorway
        fill(currentRoom.connections.up ? "lime" : "red");
        rect(480, doorThickness / 2, doorSize, doorThickness);

        // Bottom doorway
        fill(currentRoom.connections.down ? "lime" : "red");
        rect(480, 640 - doorThickness / 2, doorSize, doorThickness);

        // Left doorway
        fill(currentRoom.connections.left ? "lime" : "red");
        rect(doorThickness / 2, 320, doorThickness, doorSize);

        // Right doorway
        fill(currentRoom.connections.right ? "lime" : "red");
        rect(960 - doorThickness / 2, 320, doorThickness, doorSize);
    }
    draw

}
