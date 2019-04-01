let x = 0
let roger = []
let CIMA = 3000
let BAIXO = 3000
let vz = 0
numBolas = 50

let novx = 0
let novy = CIMA

function setup() {

    createCanvas(BAIXO, CIMA)
    background(150, 20, 200)

    for (let i = 0; i < numBolas; i++) {
        r = random(20, 150)
        let x = random(0, BAIXO)
        let y = random(0, CIMA)
        let top = new Bola(x, y, r)
        roger.push(top)
    }


}

function draw() {

    for (let i = 0; i < roger.length; i++) {
        roger[i].existe()
    }

    var swapp;
    var n = roger.length - 1;
    var x = roger;
    if (frameCount % 60 == 0) {
        do {
            swapp = false;
            for (let i = 0; i < n; i++) {
                if (x[i].r > x[i + 1].r) {
                    var temp = x[i].r;
                    x[i].r = x[i + 1].r;
                    x[i + 1].r = temp;
                    swapp = true;
                }
            }
            n--;
        } while (swapp)

        if (vz < 50) {
            for (let i = 0; i < x.length; i++) {
                x[i].x = novx;
                x[i].y = novy
                novx += x[i].r - x[i].r / 3
                novy -= x[i].r - x[i].r / 3
                vz++
            }

            for (let i = 0; i < x.length; i++) {
                fill(255, 25, 222)
                x[i].existe()
                console.log(vz)
            }
        }
    }
}


class Bola {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r
    }

    existe() {
        fill(255)
        ellipse(this.x, this.y, this.r)
        fill(0)
        text(floor(this.r), this.x - 2, this.y)
    }

}