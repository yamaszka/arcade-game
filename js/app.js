// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    //Reset enemy position when it leave the screan
    if (this.x > 550) {
           this.x = -100;
       }

     //Colisions and reset the player after themselves
     if (player.x < this.x + 50 &&
        player.x > this.x - 50&&
        player.y < this.y + 50 &&
        player.y > this.y - 50) {

            player.x = 200;
            player.y = 400;

     }//if
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, move){
    this.x = x;
    this.y = y;
    this.move = move;
    this.sprite = 'images/char-boy.png';
}

Player.prototype.update = function(dt) {
//jeśli umieszczę tu kod nie pokazuje chłopca
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyEnter) {
  switch (keyEnter) {
    case 'left':
      this.x -= this.move;
      if (this.x < 0) {
        this.x = 0;
      }
      break;
    case 'right':
      this.x += this.move;
      if (this.x > 400) {
        this.x = 400;
      }
      break;
    case 'up':
      this.y -= this.move;
      if (this.y < 0) {
        this.x = 200;
        this.y = 400;
        alert('You reach the water. Congratulations');
      }
      break;
    case 'down':
      this.y += this.move;
      if (this.y > 400) {
        this.y = 400;
      }
      break;
  }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var enemy = new Enemy(-100,320,100);
var enemy2 = new Enemy(-100,160,100);
var enemy3 = new Enemy(-100,80,300);
var enemy4 = new Enemy(-100,240,200);


allEnemies.push(enemy, enemy2, enemy3, enemy4);
var player = new Player(200,400,50);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
