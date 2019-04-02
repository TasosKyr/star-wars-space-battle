let pg;
let backImage;
let enemies = [];
let bullets = [];
let bullt;
class Battle {
    constructor() {
        this.spaceship = new Spaceship();
        this.sith = new Sith();
    }
    setup() {
        createCanvas(BATTLE_WIDTH, BATTLE_HEIGHT);
        backImage = loadImage('./images/falconbackground.jpg', img => {
            image(img, 0, 0);
        });
        frameRate(60);
        this.spaceship.setup();

        for (let i = 0; i < 8; i++) {
            for (let y = 0; y < 4; y++) {
                enemies.push(new Enemy(40 + 110 * i, 80 + 80 * y));
            }
        }
        enemies.forEach(enemy => enemy.setup());
        this.sith.setup();
    }

    draw() {
        this.spaceship.draw();
        enemies.forEach(enemy => enemy.draw());
        bullets.forEach(el => el.draw());
        this.sith.draw();
        for (let i = 0; i < bullets.length; i++) {
            for (let j = 0; j < enemies.length; j++) {
                if (bullets[i].hits(enemies[j])) {
                    console.log('BOOM');
                }
            }
        }
    }
}
