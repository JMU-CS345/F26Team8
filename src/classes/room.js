let img;

class Room {
    constructor (img) {
        this.img = img;
    }

    loadRoom() {
        image(this.img, 0, 0, 900, 900);
    }

}