const battle = new Battle();
let BATTLE_WIDTH = 750;
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

function fireBullet() {
    sithBullt = new SithBullet(
        battle.sith.x + battle.sith.img.width / 2,
        battle.sith.y + battle.sith.img.height / 2
    );
    sithBullt.setup();
    sithBullets.push(sithBullt);
}

(function loop() {
    var rand = Math.round(Math.random() * (2000 - 500)) + 1000;
    setTimeout(function() {
        fireBullet();
        loop();
    }, rand);
})();

function displayScore() {
    document.querySelector('h1').innerHTML = `Score: ${this.score}`;
}
