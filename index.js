const battle = new Battle();
let BATTLE_WIDTH = 800;
let BATTLE_HEIGHT = 680;

function setup() {
    battle.setup();
}

function draw() {
    battle.draw();
    if (keyIsDown(LEFT_ARROW)) {
        battle.spaceship.x -= 10;
    } else if (keyIsDown(RIGHT_ARROW)) {
        battle.spaceship.x += 10;
    }
    //bulletsArray.forEach(bullet => bullet.draw());
}

function keyTyped() {
    if ((key = 36)) {
        this.bullet = new Bullet();
        bulletsArray.push(this.bullet);
        battle.bullet.y -= 12;
    } else return false;
}
