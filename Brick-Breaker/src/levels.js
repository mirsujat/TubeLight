import Brick from "./brick.js";

export function buildLevel(game, level) {
  let bricks = [];

  level.forEach((row, rowIndex) => {
    row.forEach((birck, brickIndex) => {
      if (birck === 1) {
        let position = {
          x: 80 * brickIndex,
          y: 20 + 24 * rowIndex
        };
        bricks.push(new Brick(game, position));
      }
    });
  });

  return bricks;
}

export const level1 = [
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
