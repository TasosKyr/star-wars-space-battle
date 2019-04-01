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
//function fireBullet() {
//   this.imgBullet = loadImage('./images/laser_player.png');
//   this.x = battle.spaceship.x + 22;
//  this.y = battle.spaceship.y - 12;
//}
