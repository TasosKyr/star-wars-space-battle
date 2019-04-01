class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    setup() {
        let randomIm = Math.floor(Math.random() * 6);
        this.img = loadImage('./images/enemy' + randomIm + '.png');
    }

    draw() {
        image(this.img, this.x, this.y, this.img.width / 1.5, this.img.height / 1.5);
    }
}

class Sith {
    constructor() {}
    setup() {
        this.img = loadImage('./images/sith2.png');
        this.x = BATTLE_WIDTH / 2;
        this.y = 5;
    }
    draw() {
        image(this.img, this.x, this.y, this.img.width / 1.5, this.img.height / 1.5);
        this.x = this.x + 2;
        if (this.x > BATTLE_WIDTH - 20) {
            this.x = -10;
        }
    }
}
