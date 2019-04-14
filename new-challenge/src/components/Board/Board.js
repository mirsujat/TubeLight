import React, { Component } from "react";
import Square from "../Square/Square";

class Board extends Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true
  };

  renderSquares = i => {
    return (
      <Square
        key={i}
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  };
  handleClick = i => {
    const { squares } = this.state;
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares, xIsNext: !this.state.xIsNext });
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