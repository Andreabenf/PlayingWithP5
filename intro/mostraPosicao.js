let x=0

function setup() {
    createCanvas(1800, 900);
    background(150, 20, 200)
    textSize(32)
}

function draw() {
    //background(150, 20, 200)
    fill(200, 100, 20)
    //ellipse(x, height/2, x/2, x/2)
    x++
    line(width/2, height/2, mouseX, mouseY)
    text(mouseX + " " +mouseY , mouseX, mouseY)

}