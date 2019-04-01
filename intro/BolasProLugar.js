let x = 0
let roger = []

function setup() {
    createCanvas(1800, 900);


    let top = new Bola(100, height / 2, 50)
    roger.push(top)
    let tope = new Bola(500, height / 2, 50)
    roger.push(tope)

}

function draw() {

    background(150, 20, 120)
    for (let i = 0; i < roger.length; i++) {
        roger[i].existe()
    }
    swape(roger[0],roger[1])
}

class Bola {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r
    }

    existe() {
        fill(223, 90)
        ellipse(this.x, this.y, this.r)
        let novx = random(0, 1800)
        let novy = random(0, 900)
    }


}

function swape(a, b) {
    if (a.x != b.x) {
        if (a.x > b.x) {
            a.x--
        } else {
            a.x++
        }
    }
}