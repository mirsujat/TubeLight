import React, { Component } from "react";
import Board from "../Board/Board";

class Game extends Component {
  state = {};
  render() {
    return (
      <div className="game">
        <Board />
      </div>
    );
  }
}

export default Game;
