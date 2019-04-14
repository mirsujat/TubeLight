import React, { Component } from "react";
import Square from "../Square/Square";

class Board extends Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true
  };

  handleClick = i => {
    const { squares } = this.state;
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares, xIsNext: !this.state.xIsNext });
  };

  renderSquares(i) {
    return (
      <Square
        key={i}
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
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

    const status = "Next Player: " + (this.state.xIsNext ? "X" : "O");

    return (
      <div className="board">
        <div className="status">{status}</div>
        {squares}
      </div>
    );
  }
}

export default Board;
