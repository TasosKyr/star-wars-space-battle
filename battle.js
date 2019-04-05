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
let sithBulletSize = {};
let sithBullt;
let sithBullets = [];
let spaceshipHealth = 10;
let spaceshipSize = {};
let score = 0;

class Battle {
    constructor() {
        this.spaceship = new Spaceship();
        this.sith = new Sith();
    }

    setup() {
        let canvas = createCanvas(BATTLE_WIDTH, BATTLE_HEIGHT);
        canvas.parent('sketch-holder');
        backImage = loadImage('./images/falconbackground.jpg', img => {
            image(img, 0, 0);
        });
        frameRate(60);
        this.spaceship.setup();
        //Enemies setup and positioning to the screen after start
        for (let i = 0; i < 7; i++) {
            for (let y = 0; y < 4; y++) {
                enemies.push(new Enemy(10 + 110 * i, 80 + 80 * y));
            }
        }
        enemies.forEach(enemy => enemy.setup());
        this.sith.setup();
    }

    restart(type) {
        console.log('restart');
        enemies = [];
        bullets = [];
        explosions = [];
        enemySize = {};
        sithSize = {};
        bulletSize = {};
        sithBulletSize = {};
        if (!this.sith) this.sith = new Sith();
        this.sith.health = 3;
        sithBullt;
        sithBullets = [];
        spaceshipHealth = 10;
        spaceshipSize = {};
        score = 0;
        loop();
        this.spaceship.setup(type);
        this.sith.setup();
        //Enemies setup and positioning to the screen after restart
        for (let i = 0; i < 7; i++) {
            for (let y = 0; y < 4; y++) {
                enemies.push(new Enemy(10 + 110 * i, 80 + 80 * y));
            }
        }
        enemies.forEach(enemy => enemy.setup());
    }

    draw() {
        this.spaceship.draw();
        enemies.forEach(enemy => enemy.draw());
        bullets.forEach(el => el.draw());
        sithBullets.forEach(el => el.draw());
        explosions.forEach(el => el.draw());
        if (this.sith && this.sith.health > 0) {
            this.sith.draw();
        } else {
            this.sith = undefined;
        }
        //Enemies receives Spaceship's bullets
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
                    score += 100;
                    displayScore(score);
                    console.log(score);
                }
            }
        }
        //Sith receives Spaceship's bullets
        for (let i = 0; i < bullets.length; i++) {
            if (
                bullets.length !== 0 &&
                bullets[i] &&
                this.sith &&
                this.hits(bullets[i].bulletSize, this.sith.sithSize)
            ) {
                bullets.splice(i, 1);
                expl = new Explosion(this.sith.x, this.sith.y);
                expl.setup();
                explosions.push(expl);
                setTimeout(function() {
                    explosions.splice(expl, 1);
                }, 200);
                this.sith.health--;
                score += 200;
                displayScore(score);
            }
        }
        //Spaceship receives Sith's bullets
        for (let i = 0; i < sithBullets.length; i++) {
            if (
                sithBullets.length !== 0 &&
                sithBullets[i] &&
                this.hits(sithBullets[i].sithBulletSize, battle.spaceship.spaceshipSize)
            ) {
                sithBullets.splice(i, 1);
                spaceshipHealth--;

                expl = new Explosion(battle.spaceship.x, battle.spaceship.y);
                expl.setup();
                explosions.push(expl);
                setTimeout(function() {
                    explosions.splice(expl, 1);
                }, 200);
            }
        }
        //Game over function
        if (spaceshipHealth < 1) {
            noLoop();
            gameOver();
        }

        if (enemies.length === 0 && (!this.sith || this.sith.health < 1)) {
            noLoop();
            gameOver();
        }
        function gameOver() {
            /* clear(); */
            document.querySelector('.game-container').classList.add('non-active');
            document.querySelector('.game-over-container').classList.remove('non-active');
        }
        /* enemies.forEach(el => {
            if (
                el.y > BATTLE_HEIGHT - el.img.height / 1.5 ||
                this.hits(el.enemySize, battle.spaceship.spaceshipSize)
            ) {
                gameOver();
            }
        });
        if (
            this.sith.y > BATTLE_HEIGHT - this.sith.img.height / 1.5 ||
            this.hits(this.sith.sithSize, battle.spaceship.spaceshipSize)
        ) {
            gameOver();
        } */
    }
    //Bullet collision general function
    hits(a, b) {
        return !(a.left > b.right || a.right < b.left || a.top > b.bottom || a.bottom < b.top);
    }
}
