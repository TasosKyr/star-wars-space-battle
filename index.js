const battle = new Battle();
let BATTLE_WIDTH = 750;
let BATTLE_HEIGHT = 680;
//Audio setup
function preload() {
    soundFormats('mp3', 'ogg');
    mySound = loadSound('./audio/Darthvader.mp3');
    mySoundBullet = loadSound('./audio/TIE-Fire.wav');
}
//Start the game button functions
document.querySelectorAll('.start-game-btn').forEach(el => {
    el.addEventListener('click', function() {
        const type = el.classList[el.classList.length - 1];
        startGame();
        battle.restart(type);
        displayScore(score);
    });
});
function startGame() {
    document.querySelector('.start-container').classList.add('non-active');
    document.querySelector('.game-container').classList.remove('non-active');
}
//Restart the game button function
window.onload = function() {
    document.querySelectorAll('.restart-game-btn').forEach(el => {
        el.addEventListener('click', function() {
            const type = el.classList[el.classList.length - 1];
            console.log(type);
            restartGame();
            battle.restart(type);
            displayScore(score);
        });
    });
};
function restartGame() {
    document.querySelector('.game-over-container').classList.add('non-active');
    document.querySelector('.game-container').classList.remove('non-active');
}
//Global setup function
function setup() {
    battle.setup();
    mySound.setVolume(0.8);
    mySound.loop();
}

function draw() {
    battle.draw();
    //Spaceship's movement function
    if (keyIsDown(LEFT_ARROW)) {
        battle.spaceship.x -= 3;
    } else if (keyIsDown(RIGHT_ARROW)) {
        battle.spaceship.x += 3;
    }
}
//Spaceship's firing bullets function
function keyTyped() {
    if ((key = 'BACKSPACE')) {
        bullt = new Bullet(battle.spaceship.x + 22, battle.spaceship.y - 13);
        bullt.setup();
        bullets.push(bullt);
        mySoundBullet.play();
    } else return false;
}
//Sith's firing bullets functions
function fireBullet() {
    sithBullt = new SithBullet(
        battle.sith.x + battle.sith.img.width / 2,
        battle.sith.y + battle.sith.img.height / 2
    );
    sithBullt.setup();
    sithBullets.push(sithBullt);
}
(function loop() {
    var rand = Math.round(Math.random() * (900 - 400)) + 1000;
    setTimeout(function() {
        fireBullet();
        loop();
    }, rand);
})();
//Score and quotes' setup function
const quotes = [
    'Great shot kid, that was one in a million!',
    'Your focus determines your reality.',
    'Do. Or do not. There is no try.',
    'Never tell me the odds!',
    'Great, kid. Don’t get cocky.'
];
function displayScore(score) {
    let randQ = Math.floor(Math.random() * 5);
    document.querySelector('.your-score').innerText = `${score} - ${quotes[randQ]}`;
}
