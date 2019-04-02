class Spaceship {
    constructor() {}
    setup() {
        this.img = loadImage('./images/milFalcon.png');
        this.x = BATTLE_WIDTH / 2;
        this.y = BATTLE_HEIGHT - 80;
    }
    draw() {
        background(backImage);
        image(this.img, this.x, this.y, this.img.width / 1.5, this.img.height / 1.5);
        if (this.x < -20) {
            this.x = BATTLE_WIDTH - 30;
        }
        if (this.x > BATTLE_WIDTH - 20) {
            this.x = -10;
        }
        if (this.y <= BATTLE_HEIGHT) {
            this.y = BATTLE_HEIGHT - 69;
        }
    }
}
