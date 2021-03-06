class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    setup() {
        let randomIm = Math.floor(Math.random() * 7);
        this.img = loadImage('./images/enemy' + randomIm + '.png');
    }

    draw() {
        image(this.img, this.x, this.y, this.img.width / 1.5, this.img.height / 1.5);
        this.x = this.x + random(-0.3, 0.3);
        this.y = this.y + 0.08;
        if (this.x > BATTLE_WIDTH - 20) {
            this.x = 5;
        }

        this.enemySize = {
            left: this.x,
            right: this.x + this.img.width / 1.5,
            top: this.y,
            bottom: this.y + this.img.height / 1.5
        };
    }
}

class Sith {
    constructor() {}
    setup() {
        this.img = loadImage('./images/sith2.png');
        this.x = BATTLE_WIDTH / 2;
        this.y = 5;
        this.health = 10;
    }
    draw() {
        if (this.img) {
            image(this.img, this.x, this.y, this.img.width / 1.5, this.img.height / 1.5);
            this.x = this.x + 2;
            if (this.x > BATTLE_WIDTH - 20) {
                this.x = -10;
            }
            this.y = this.y + 0.05;
            this.sithSize = {
                left: this.x,
                right: this.x + this.img.width / 1.5,
                top: this.y,
                bottom: this.y + this.img.height / 1.5
            };
        }
    }
}
