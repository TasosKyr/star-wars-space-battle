const battle = new Battle();
let BATTLE_WIDTH = 800;
let BATTLE_HEIGHT = 680;

function setup() {
    battle.setup();
}

function draw() {
    battle.draw();
}
//function fireBullet() {
//   this.imgBullet = loadImage('./images/laser_player.png');
//   this.x = battle.spaceship.x + 22;
//  this.y = battle.spaceship.y - 12;
//}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        battle.spaceship.x -= 30;
    } else if (keyCode === RIGHT_ARROW) {
        battle.spaceship.x += 30;
    } else if (keyCode === UP_ARROW) {
        battle.spaceship.y -= 30;
    } else if (keyCode === DOWN_ARROW) {
        battle.spaceship.y += 30;
    } else if (keyCode === BACKSPACE) {
        battle.bullet.fireBullet;
    } else {
        return false;
    }
}
