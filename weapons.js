class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    setup() {
        this.img = loadImage('./images/laser_player.png');
    }
    draw() {
        image(this.img, this.x, this.y, this.img.width / 1.25, this.img.height / 1.25);
        this.y = this.y - 20;
        this.bulletSize = {
            left: this.x,
            right: this.x + this.img.width / 1.25,
            top: this.y,
            bottom: this.y + this.img.height / 1.25
        };
    }
}

class SithBullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    setup() {
        this.img = loadImage('./images/laser_enemy.png');
    }
    draw() {
        image(this.img, this.x, this.y, this.img.width / 1.25, this.img.height / 1.25);
        this.y = this.y + 10;
        this.sithBulletSize = {
            left: this.x,
            right: this.x + this.img.width / 1.25,
            top: this.y,
            bottom: this.y + this.img.height / 1.25
        };
    }
}

class Explosion {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    setup() {
        let randomIm = Math.floor(Math.random() * 5);
        this.img = loadImage('./images/explosion' + randomIm + '.png');
    }
    draw() {
        image(this.img, this.x, this.y, this.img.width / 1.25, this.img.height / 1.25);
    }
}
