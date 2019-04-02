let x = 0
let roger = []

function setup() {
    createCanvas(1800, 900);


    let top = new Bola(random(10, 500), random(10, 500), 50)
    roger.push(top)
    let tope = new Bola(random(10, 500), random(10, 500), 50)
    roger.push(tope)

}

function draw() {

    background(150, 20, 120)
    for (let i = 0; i < roger.length; i++) {
        roger[i].existe()
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

        swape(b) {
            if (this.x != b.x) {
                if (this.x > b.x) {
                    this.x--
                } else {
                    this.x++
                }
            }
            if (this.y != b.y) {
                if (this.y > b.y) {
                    this.y--
                } else {
                    this.y++
                }
            }
        }


    }

   

    function mouseClicked() {
        return true;
    }