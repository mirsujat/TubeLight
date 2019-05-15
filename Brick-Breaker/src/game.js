import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";
import Brick from "./brick.js";
import { buildLevel, level1 } from "./levels.js";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    // create new instance of Paddle and Ball class and passes it's own this
    // so that they can get any information from it's own class if need.
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);

    let bricks = buildLevel(this, level1);

    this.gameObjects = [this.ball, this.paddle, ...bricks];

    new InputHandler(this.paddle);
  }

  // update the ball and paddle
  update(deltaTime) {
    this.gameObjects.forEach(object => object.update(deltaTime));
  }

  // draw the ball and paddle
  draw(ctx) {
    this.gameObjects.forEach(object => object.draw(ctx));
  }
}
