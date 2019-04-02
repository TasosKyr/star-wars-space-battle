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
    }

    hits() {}
}
