import React, { Component } from "react";
import Square from "../Square/Square";

class BoardWithMap extends Component {
  state = {
    boardSquare: [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
  };

  render() {
    const { boardSquare } = this.state;
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
    return <div className="board">{squares}</div>;
  }
}

export default BoardWithMap;
