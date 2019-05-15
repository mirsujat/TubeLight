import { detectCollision } from "./collisionDetection.js";
export default class Ball {
  constructor(game) {
    this.image = document.getElementById("img_ball");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;

    this.position = { x: 10, y: 400 };
    this.speed = { x: 2, y: -2 };
    this.size = 16;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    //console.log(this.game.paddle.position.x);
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // check to see the ball hit the wall on left or right and
    //bounce the ball to oposite direction
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    // check to see the ball hit the wall on top or bottom and
    //bounce the ball to oposite direction
    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }
    // check  the collision with paddle
    let bottomOfBall = this.position.y + this.size;
    let topOfPadddle = this.game.paddle.position.y;
    let leftSideOfPaddle = this.game.paddle.position.x;
    let rightSideOfPaddle =
      this.game.paddle.position.x + this.game.paddle.width;

    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
