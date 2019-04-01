class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    setup() {
        let randomIm = Math.floor(Math.random() * 8);
        this.img = loadImage('./images/enemy' + randomIm + '.png');
    }

    draw() {
        image(this.img, this.x, this.y, this.img.width / 1.5, this.img.height / 1.5);
    }
}
