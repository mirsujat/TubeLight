import Paddle from "./paddle.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// clear the screen
ctx.clearRect(0, 0, 800, 600);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);
