import React, { Component } from "react";
import Square from "../Square/Square";

class Board extends Component {
  renderSquares = i => {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  };

  render() {
    const boardSize = 3;
    const squares = [];
    for (let i = 0; i < boardSize; ++i) {
      const row = [];
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
