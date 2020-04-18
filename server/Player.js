const Gun = require('./Gun');

class Player {

  constructor (socket) {
    this.socket = socket;
    this.speed = 5;
    this.r = 20;
    this.x = Math.random() * 700 + 50;
    this.y = Math.random() * 500 + 50;
    this.hp = 100;
    this.kills = 0;
    this.gun = new Gun(40, 5);
    this.m = {
      up: false,
      down: false,
      left: false,
      right: false
    }
  }

  move() {
    if (this.m.up) { this.y -= this.speed; }
    if (this.m.down) { this.y += this.speed; }
    if (this.m.left) { this.x -= this.speed; }
    if (this.m.right) { this.x+= this.speed; }
    if (this.x > 1600) { this.x = 0; }
    if (this.x < 0) { this.x = 1600; }
    if (this.y > 1200) { this.y = 0; }
    if (this.y < 0) { this.y = 1200; }
  }



}

module.exports = Player;