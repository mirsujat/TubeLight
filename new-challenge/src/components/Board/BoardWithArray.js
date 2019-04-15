import React, { Component } from "react";
import Square from "../Square/Square";

class Board extends Component {
  renderSquares = i => {
    const winLine = this.props.winLine;
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        highlight={winLine && winLine.includes(i)}
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
