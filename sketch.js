var bombs = [];
var maxBombCount = 10;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    for (var i = 0; i < bombs.length; i++) {
        // Increase the single bomb y position
        bombs[i].y += 5;
        // Create a new ellipse using the x and y properties of the bomb object
        ellipse(bombs[i].x, bombs[i].y, 4, 10);
        if (bombs[i].y >= height) {
            fill(255, 0, 0)
            noStroke();
            ellipse(bombs[i].x, windowHeight / 2, bombs[i].size);
        }
        else {
            fill(bombs[i].color);
            noStroke()
        }
    }
}

function mouseClicked() {
    if (bombs.length > maxBombCount) {

        stroke(255);
        fill(0, 0, 0);
        rect(0, 0, windowWidth, windowHeight);
        textSize(32);
        fill(255);
        text("Remember dresda", windowWidth / 3, windowHeight / 3);
    }
}

function mouseReleased() {
    // Create a new position
    var newx = random() * width;
    var newSize = random(2, 10);
    var newColor;
    var myRandom = random(0, 1);
    if (myRandom <= 0.5) {
        newColor = color('#E52B50');
    }
    else {
        newColor = color('#A51800');
    }
    // Create an object representing bomb properties.
    // object properties are defined by name : value
    // and are comma saeparated.
    var obj = {
        x: newx
        , y: 0
        , size: newSize
        , color: newColor
    };
    // The object is added to the array.
    bombs.push(obj);
}