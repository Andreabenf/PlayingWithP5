let x = 0
let roger = []
let CIMA = 3000
let BAIXO = 3000

let novx = 0
let novy = CIMA

function setup() {
    
    createCanvas(BAIXO, CIMA)
    background(150, 20, 200)

    for (let i = 0; i < 50; i++) {
        r = random(1, 150)
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
    //if (frameCount % 60 == 0) {
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
    //}
    for (let i = 0; i < x.length; i++) {
        x[i].x = novx;
        x[i].y = novy
        novx += x[i].r - x[i].r/3
        novy -= x[i].r - x[i].r/3
    }

    for (let i = 0; i < x.length; i++) {
        fill(255, 25, 222)
        x[i].existe()

    }


    //for(let j =0;j<x.length;j++ ){
    //  console.log(x[j].r)
    //}


}

class Bola {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r
    }

    existe() {
        ellipse(this.x, this.y, this.r)
    }

}