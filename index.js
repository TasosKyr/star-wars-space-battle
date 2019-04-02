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
}

function keyTyped() {
    if ((key = 'BACKSPACE')) {
        bullt = new Bullet(battle.spaceship.x + 22, battle.spaceship.y - 13);
        bullt.setup();
        bullets.push(bullt);
    } else return false;
}
