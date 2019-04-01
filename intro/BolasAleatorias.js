let x = 0
let roger = []

function setup() {
    createCanvas(1800, 900);

    for (let i = 0; i < 100; i++) {
        let r = random(1, 200)
        let x = random(0, 1800)
        let y = random(0, 900)
        let top = new Bola(x, y, r)
        roger.push(top)
    }

}

function draw() {
    background(150, 20, 200)
    for (let i = 0; i < roger.length; i++) {
        roger[i].existe()
    }

}

class Bola {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r
    }

    existe() {
        ellipse(this.x, this.y, this.r)
        let novx = random(0, 1800)
        let novy = random(0, 900)
    }


}