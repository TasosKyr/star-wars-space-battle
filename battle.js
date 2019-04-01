let pg;
let backImage;
let enemiesImages = [];
let enemiesArray = [];
let bulletsArray = [];
class Battle {
    constructor() {
        this.spaceship = new Spaceship();
        this.bullet = new Bullet();
        //this.enemy = new Enemy();
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
                enemiesArray[i] = new Enemy(40 + 110 * i, 90);
            }
        }
        enemiesArray.forEach(enemy => enemy.setup());
    }

    draw() {
        this.spaceship.draw();
        this.bullet.draw();
        enemiesArray.forEach(enemy => enemy.draw());
        //this.enemy.draw();
    }
}
