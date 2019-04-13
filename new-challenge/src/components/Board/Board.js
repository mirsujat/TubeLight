import React, { Component } from "react";
import Square from "../Square/Square";

class Board extends Component {
  state = {
    squares: Array(9).fill(null)
  };
  renderSquares(i) {
    return <Square key={i} value={this.state.squares[i]} />;
  }

  render() {
    const boardSize = 3;
    let squares = [];
    for (let i = 0; i < boardSize; ++i) {
      let row = [];
      for (let j = 0; j < boardSize; ++j) {
        row.push(this.renderSquares(i * boardSize + j));
      }
      squares.push(
        <div key={i} className="board-row">
          {row}
        </div>
      );
    }
    return <div className="board">{squares}</div>;
  }
}

export default Board;
