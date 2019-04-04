const battle = new Battle();
let BATTLE_WIDTH = 750;
let BATTLE_HEIGHT = 680;

document.querySelectorAll('.start-game-btn').forEach(el => {
    el.addEventListener('click', function() {
        startGame();
        battle.restart();
        displayScore(score);
    });
});

window.onload = function() {
    document.querySelectorAll('.restart-game-btn').forEach(el => {
        el.addEventListener('click', function() {
            restartGame();
            battle.restart();
            displayScore(score);
        });
    });
};

function startGame() {
    document.querySelector('.start-container').classList.add('non-active');
    document.querySelector('.game-container').classList.remove('non-active');
}

function restartGame() {
    document.querySelector('.game-over-container').classList.add('non-active');
    document.querySelector('.game-container').classList.remove('non-active');
}

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
    var rand = Math.round(Math.random() * (1500 - 500)) + 1000;
    setTimeout(function() {
        fireBullet();
        loop();
    }, rand);
})();

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
