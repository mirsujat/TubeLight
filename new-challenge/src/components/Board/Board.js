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
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
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
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner : " + winner;
    } else {
      status = "Next Player: " + (this.state.xIsNext ? " X" : "O");
    }
    return (
      <div className="board">
        <div className="status">{status}</div>
        {squares}
      </div>
    );
  }
}

export default Board;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
