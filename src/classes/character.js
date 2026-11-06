let x = 100;
let y = 100;

class Character {
    constructor (img) {
        this.img = img;
    }

    loadCharacter() {
        image(this.img, 450, 450, 100, 100)
    }

    //arrow key movement
    movement() {
        
        if (keyIsDown(LEFT_ARROW)) {
            x -= 5; 
        }
        if (keyIsDown(RIGHT_ARROW)) {
            x += 5; 
        }
        if (keyIsDown(UP_ARROW)) {
            y -= 5; 
        }
        if (keyIsDown(DOWN_ARROW)) {
            y += 5; 
        }

        image(this.img, x, y, 100, 100);
    }
}