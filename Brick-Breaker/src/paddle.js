export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.width = 150;
    this.height = 20;

    this.maxSpeed = 5;
    this.speed = 0;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10
    };
  }

  // handle paddle move left
  moveLeft() {
    this.speed = -this.maxSpeed;
  }
  // handle paddle move right
  moveRight() {
    this.speed = this.maxSpeed;
  }

  // draw the canvas
  draw(ctx) {
    ctx.fillStyle = "#ccc";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  // move the obj 5 pixel per deltaTime
  update(deltaTime) {
    if (!deltaTime) return;

    this.position.x += this.speed;

    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
  }
}
