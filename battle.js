let pg;
let backImage;
let enemies = [];
let bullets = [];
let bullt;
let expl;
let explosions = [];
let enemySize = {};
let sithSize = {};
let bulletSize = {};
let sithHealth = 2;
let sithBullt;
let sithBullets = [];

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
        sithBullets.forEach(el => el.draw());
        explosions.forEach(el => el.draw());
        if (sithHealth > 0) {
            this.sith.draw();
        } else {
            noLoop();
        }

        for (let i = 0; i < bullets.length; i++) {
            for (let j = 0; j < enemies.length; j++) {
                if (
                    bullets.length !== 0 &&
                    bullets[i] &&
                    this.hits(bullets[i].bulletSize, enemies[j].enemySize)
                ) {
                    bullets.splice(i, 1);
                    expl = new Explosion(enemies[j].x, enemies[j].y);
                    expl.setup();
                    explosions.push(expl);
                    enemies.splice(j, 1);
                    setTimeout(function() {
                        explosions.splice(expl, 1);
                    }, 200);
                }
            }
        }

        for (let i = 0; i < bullets.length; i++) {
            if (
                bullets.length !== 0 &&
                bullets[i] &&
                this.hits(bullets[i].bulletSize, this.sith.sithSize)
            ) {
                bullets.splice(i, 1);
                sithHealth--;
                console.log(sithHealth);
            }
        }
    }

    hits(a, b) {
        return !(a.left > b.right || a.right < b.left || a.top > b.bottom || a.bottom < b.top);
    }
}
