import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import * as serviceWorker from "./serviceWorker";

const Square = props => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

class Board extends React.Component {
  state = {
    rows: [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
  };

  render() {
    const { rows } = this.state;
    let BoardRow = null;
    if (rows) {
      BoardRow = rows.map((r, i) => {
        return (
          <div className="board-row" key={"row_" + i}>
            {r.map((d, j) => {
              return (
                <Square
                  key={d}
                  value={this.props.squares[d]}
                  onClick={() => this.props.onClick(d)}
                />
              );
            })}
          </div>
        );
      });
    }

    return <div>{BoardRow}</div>;
  }
}
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      xIsNext: true,
      stepNumber: 0,
      selected: []
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    if (calculateWinner(squares) === squares) {
      console.log("Winner Squares: ", squares);
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
      selected: step
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const winnerSquares = current.squares.find(Element => {
      return Element === winner;
    });

    const findWinner = current.squares.filter((el, i) => {
      return el === winnerSquares;
    });
    console.log("Find Winner :", findWinner);
    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      let locationX = step.squares.lastIndexOf("X");
      let locationO = step.squares.lastIndexOf("O");
      if (locationX === -1) {
        return (locationX = "");
      }
      if (locationO === -1) {
        return (locationO = "");
      }

      let classname = "";
      if (this.state.selected === move) {
        classname = "active";
      }

      return (
        <li key={move} className={classname}>
          <div>
            <button className={classname} onClick={() => this.jumpTo(move)}>
              {desc}
            </button>
            <span className="position">Position of X: {locationX}</span>
            <span className="position">Position of O: {locationO}</span>
          </div>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next Player: " + (this.state.xIsNext ? "x" : "o");
    }
    console.log("Current Squares: ", current.squares);
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <button className="sort">Sort by Acending</button>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

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
