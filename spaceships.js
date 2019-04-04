class Spaceship {
    constructor() {}
    setup(type) {
        this.img = loadImage(`./images/${type ? type : 'milFalcon'}.png`);
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

        this.spaceshipSize = {
            left: this.x,
            right: this.x + this.img.width / 1.5,
            top: this.y,
            bottom: this.y + this.img.height / 1.5
        };
    }
}

/* class Fighter {
    constructor() {}
    setup() {
        this.img = loadImage('./images/fighter.png');
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

        this.fighterSize = {
            left: this.x,
            right: this.x + this.img.width / 1.5,
            top: this.y,
            bottom: this.y + this.img.height / 1.5
        };
    }
} */
