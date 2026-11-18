
class Room {
    constructor(img, roomData) {
        this.img = img;
        this.roomData = roomData; // necessary
    }
    

    /*loadRoom() {
       
        imageMode(CORNER);
        image(this.img, 0, 0, 960, 640);
    }*/

    // Creates the room based on JSON prebuilt Map Structure
    // Numbers correspond to corners, Letters correspond to wall type
    // Empty for bare floor, D for Door

    // Idea, pass in the current room and the json file instead of the json array
    // using the method for draw doors, detect the connection types, then attach the
    //specific room type

    roomTen(){
        return "room10";
    }

    loadRoom(currentRoom) {
        let roomType = this.roomData[this.getRoomType(currentRoom)];
        imageMode(CORNER);
        console.log("Rows:", roomType.length);
        console.log("Columns:", roomType[0].length);
        // Rows
        for (let i = 0; i < roomType.length; i++){
            // Columns
            for (let j = 0; j < roomType[i].length; j++){
                let curTile = roomType[i][j];

                //Tile Selection
                switch (curTile){
                    case "": // Empty
                        image(this.img, (j * 64), (i * 64), 64, 64, 32, 32, 32, 32);
                        break;
                    case "1": // Corner
                        image(this.img,(j * 64), (i * 64), 64, 64, 0, 0, 32, 32);
                        break;
                    case "2": // Corner
                        image(this.img,(j * 64), (i * 64), 64, 64, 64, 0, 32, 32);
                        break;
                    case "3": // Corner
                        image(this.img,(j * 64), (i * 64), 64, 64, 0, 64, 32, 32);
                        break;
                    case "4": // Corner
                        image(this.img, (j * 64), (i * 64), 64, 64, 64, 64, 32, 32);
                        break;
                    case "T": //Top Wall
                        image(this.img, (j * 64),(i * 64), 64, 64, 32, 0, 32, 32);
                        break;
                    case "B": // Bottom Wall
                        image(this.img, (j * 64),(i * 64), 64, 64, 32, 64, 32, 32);
                        break;
                    case "S1": // Left Wall
                        image(this.img, (j * 64),(i * 64), 64, 64, 0, 32, 32, 32);
                        break;
                    case "S2": // Right Wall
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
    

    getRoomType(currentRoom){
        let choices = [
            null, // it literally doesn't exist :)
            "room12", // 0001 Right
            "room13", // 0010 Left
            "room6", // 0011 Left Right
            "room14", // 0100 Up
            "room10", // 0101 Up Right
            "room8", // 0110 Up Left
            "room4", // 0111 Up Left Right
            "room15", // 1000 Down
            "room11", // 1001 Down Right
            "room9", // 1010 Down Left
            "room2", // 1011 Down Left Right
            "room7", // 1100 Down Up
            "room3", // 1101 Down Up Right
            "room5", // 1110 Down Up Left
            "room1"  // 1111 Down Up Left Right
        ]
        if (!currentRoom) return;
        let roomDown, roomUp, roomLeft, roomRight, roomNumber;
        
        // Number Calculation for Room Selection
        roomDown = currentRoom.connections.down ? 8 : 0;
        roomUp = currentRoom.connections.up ? 4 : 0;
        roomLeft = currentRoom.connections.left ? 2 : 0;
        roomRight = currentRoom.connections.right ? 1 : 0;
        
        roomNumber = roomDown + roomUp + roomLeft + roomRight;


        return choices[roomNumber];
    }
    //ROOMS
  
    
}
