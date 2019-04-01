let pg;
let backImage;
let enemiesArray = [];
let bulletsArray = [];
class Battle {
    constructor() {
        this.spaceship = new Spaceship();
        this.bullet = new Bullet();
        this.sith = new Sith();
    }
    setup() {
        createCanvas(BATTLE_WIDTH, BATTLE_HEIGHT);
        backImage = loadImage('./images/falconbackground.jpg', img => {
            image(img, 0, 0);
        });
        frameRate(60);
        this.spaceship.setup();
        this.bullet.setup();
        for (let i = 0; i < 8; i++) {
            for (let y = 0; y < 4; y++) {
                enemiesArray.push(new Enemy(40 + 110 * i, 80 + 80 * y));
            }
        }
        enemiesArray.forEach(enemy => enemy.setup());
        this.sith.setup();
    }

    draw() {
        this.spaceship.draw();
        enemiesArray.forEach(enemy => enemy.draw());
        this.sith.draw();
        this.bullet.draw();
    }
}
