import React, { Component } from "react";
import BoardWithArray from "../Board/BoardWithArray";
import BoardWithMap from "../Board/BoardWithMap";

class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill(null) }],
    xIsNext: true,
    stepNumber: 0,
    isAscending: true,
    isReset: false
  };

  handleClick = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares).winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
          lastMoveIndex: i
        }
      ]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
      isReset: false
    });
  };

  jumpTo = step => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  };

  handleToggle = () => {
    this.setState({
      isAscending: !this.state.isAscending
    });
  };
  handleReset = () => {
    this.setState({
      stepNumber: 0,
      isReset: true
    });
  };

  render() {
    const { history, stepNumber, isAscending, isReset } = this.state;
    const current = history[stepNumber];
    const winInfo = calculateWinner(current.squares);
    const winner = winInfo.winner;

    let gameState;

    let moves = history.map((step, move) => {
      const lastMoveIndex = step.lastMoveIndex;
      const col = 1 + (lastMoveIndex % 3);
      const row = 1 + Math.floor(lastMoveIndex / 3);
      const desc = move ? `Go to move# ${move} (${col}, ${row})` : null;
      if (move) {
        return (gameState = (
          <li key={move}>
            <button
              className={
                move === stepNumber
                  ? "btn move-list move-list-item-selected"
                  : "btn move-list"
              }
              onClick={() => this.jumpTo(move)}
            >
              {desc}
            </button>
          </li>
        ));
      } else {
        gameState = null;
      }
    });

    if (!isAscending) {
      moves.reverse();
    }
    if (isReset) {
      moves = null;
    }
    let status;
    if (winner) {
      status = <div className="status-win">Winner: {winner}</div>;
    } else {
      if (winInfo.isDraw) {
        status = <div className="status-draw">Match Draw</div>;
      } else {
        status = "Next Player: " + (this.state.xIsNext ? " X" : "O");
      }
    }
    return (
      <div className="game">
        <div className="game-board">
          <BoardWithMap
            squares={current.squares}
            onClick={i => this.handleClick(i)}
            winLine={winInfo.line}
          />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <button onClick={this.handleToggle} className="btn">
            {isAscending ? "Sort Descending" : " Sort Ascending"}
          </button>
          <button onClick={this.handleReset} className="btn start-btn">
            Start New Game!
          </button>
          <div className="move">{moves}</div>
        </div>
      </div>
    );
  }
}

export default Game;

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
      return { winner: squares[a], line: lines[i], isDraw: false };
    }
  }
  let isDraw = true;
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      isDraw = false;
      break;
    }
  }
  return { winner: null, line: null, isDraw: isDraw };
}
