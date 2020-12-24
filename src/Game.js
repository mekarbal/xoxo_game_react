import "./index.css";
import { useState } from "react";

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClickEvent}>
      {props.value}
    </button>
  );
};

const winnerCalculate = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] == squares[b] && squares[b] == squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const Board = () => {
  const intialSquares = Array(9).fill(null);

  const [squares, setSquares] = useState(intialSquares);
  const winner = winnerCalculate(squares);
  const [xIsNext, setXIsNext] = useState(true);
  const handleClickEvent = (i) => {
    const newSquares = [...squares];
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return (
      <Square value={squares[i]} onClickEvent={() => handleClickEvent(i)} />
    );
  };

  const status = winner
    ? `Winner : ${winner}`
    : `Next Player ${xIsNext ? "X" : "O"}`;

  return (
    <div className="App" style={gameStyles.boardColor}>
      {status}
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

function Game() {
  return (
    <div className="game">
      <Board />
    </div>
  );
}

export default Game;

const gameStyles = {
  backgroundColor: "salmon",
  margin: 10,
  padding: 20,
  boardColor: {
    backgroundColor: "skyblue",
    margin: 10,
    padding: 20,
    justifyContent: "center",
    textAlign: "center",
  },
};
