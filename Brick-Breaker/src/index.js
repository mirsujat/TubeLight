// import Paddle from "./paddle.js";
// import InputHandler from "./input.js";
// import Ball from "./ball.js";
import Game from "./game.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// create new game obj
let game = new Game(GAME_WIDTH, GAME_HEIGHT);

// clear the screen
ctx.clearRect(0, 0, 800, 600);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  // clear the screen
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
