export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = 150;
    this.height = 20;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10
    };
  }

  draw(ctx) {
    ctx.fillStyle = "#ccc";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  // move the obj 5 pixel per deltaTime
  update(deltaTime) {
    if (!deltaTime) return;
    // this.position.x += 5 / deltaTime;
  }
}
