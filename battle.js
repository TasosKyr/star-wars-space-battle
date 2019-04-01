var backImage;
class Battle {
    constructor() {
        this.spaceship = new Spaceship();
        this.bullet = new Bullet();
    }
    setup() {
        createCanvas(BATTLE_WIDTH, BATTLE_HEIGHT);
        backImage = loadImage('./images/background1.jpg', img => {
            image(img, 0, 0);
        });
        frameRate(60);
        this.spaceship.setup();
        this.bullet.setup();
    }
    draw() {
        this.spaceship.draw();
        this.bullet.draw();
    }
}
