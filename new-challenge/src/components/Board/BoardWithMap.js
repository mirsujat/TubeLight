import React, { Component } from "react";
import Square from "../Square/Square";

class BoardWithMap extends Component {
  state = {
    boardSquare: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
    testSquares: [
      [0, 1],
      [2],
      [3, 4, 5],
      [6, 7, 8],
      [9, 10, 11],
      [12],
      [13, 14]
    ]
  };

  render() {
    const { boardSquare, testSquares, formFields } = this.state;
    const winLine = this.props.winLine;
    let squares;
    if (boardSquare) {
      squares = boardSquare.map((r, i) => {
        return (
          <div className="board-row" key={"row_" + i}>
            {r.map((d, j) => {
              return (
                <Square
                  key={d}
                  value={this.props.squares[d]}
                  onClick={() => this.props.onClick(d)}
                  highlight={winLine && winLine.includes(d)}
                />
              );
            })}
          </div>
        );
      });
    }

    //test squares
    let testSquareBoard;
    if (testSquares) {
      testSquareBoard = testSquares.map((r, i) => {
        return (
          <div className="board-row" key={"row_" + i}>
            {r.map((d, j) => {
              return (
                <button key={d} className="test-square">
                  {d}
                </button>
              );
            })}
          </div>
        );
      });
    }

    return (
      <div className="board">
        {squares}
        <div className="test-board"> {testSquareBoard}</div>
      </div>
    );
  }
}

export default BoardWithMap;
