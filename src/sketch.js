
let dungeon;

function setup() {
  createCanvas(900, 900);

  dungeon = new Dungeon();
  dungeon.generateDungeon();
}

function draw() {
  background(35);

  dungeon.draw();
}

// Press R to regenerate
function keyPressed() {
  if (key === "r" || key === "R") {
    dungeon.generateDungeon();
  }
}
