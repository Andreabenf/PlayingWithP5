let x = 0;


function setup() {
    createCanvas(900, 800)
    let fps = frameRate();


}

function draw() {
    background(255,200,10)
    x++
    //fill(100, 200, 300)
    //ellipse(width / 2, x, x, 200 - x)

    fill(255);
    stroke(0);
    text("FPS: " + fps.toFixed(2), 10, height - 10);
    

    
}