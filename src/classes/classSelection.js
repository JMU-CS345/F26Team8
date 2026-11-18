class ClassSelection {
    constructor() {

    }

    draw() {
        // Class selection background
        fill(0, 0, 0);
        rect(450, 450, 750, 500, 30);

        // Class images
        image(fireImg, 200, 350, 100, 100);
        image(iceImg, 400, 350, 100, 100);
        image(grassImg, 600, 350, 100, 100);

        // Title and description text
        fill(255, 255, 255);
        textSize(40);
        text("Select Your Class", 290, 290); 
        textSize(20);
        text("Fire", 235, 470);
        text("Ice", 435, 470);
        text("Grass", 625, 470);
        textSize(15);
        text("- Fireballs", 215, 495);
        text("- Ice Beam", 415, 495);
        text("- Grass Blade", 610, 495);

        // Selection buttons
        fill(26, 201, 29);
        rect(250, 570, 100, 50)
        rect(450, 570, 100, 50)
        rect(650, 570, 100, 50)
        fill(0, 0, 0)
        textSize(15);
        text("Press [Q]", 220, 575);
        text("Press [E]", 420, 575);
        text("Press [F]", 620, 575);

        
    }
}