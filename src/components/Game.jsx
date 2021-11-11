import React, { useState } from "react";
import Board from "./Board";
import CalculateRowCol from "./CalculateRowCol";
import "./index.css";

const boardLength = 4;
const winnerLength = 4;
const historyDefault = [
  {
    squares: Array(boardLength * boardLength).fill(null),
  },
];

const Game = () => {
  const [history, setHistory] = useState(historyDefault);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [clickedIndex, setClickIndex] = useState([]);

  const handleClick = (i) => {
    const history1 = history.slice(0, stepNumber + 1);
    const clickedIndexq = clickedIndex.slice(0, stepNumber);
    const current = history1[history1.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory((history) =>
      history.concat([
        {
          squares: squares,
        },
      ])
    );
    setStepNumber(history1.length);
    setXIsNext((x) => !x);
    setClickIndex((x) => clickedIndexq.concat(i));
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const calculateWinner = (squares) => {
    let won = false;
    //win in row or column
    for (let i = 0; i < boardLength; i++) {
      for (let j = 0; j <  boardLength -winnerLength + 1; j++) {
        let rowList = [];
        let rowIndex = [];
        let columnList = [];
        let columnIndex = [];
        for (let k = 0; k <  winnerLength; k++) {
          rowList.push(squares[i * boardLength + j + k]);
          columnList.push(squares[(j + k) * boardLength + i]);

          rowIndex.push(i * boardLength + j + k);
          columnIndex.push((j + k) * boardLength + i);
        }
         console.log(`row=> i=${i}, j=${j}  ==== ${rowList.toString()}`);
        console.log(`column=> i=${i}, j=${j} ==== ${columnList.toString()}`);
        won =
          rowList &&
          rowList.length === winnerLength &&
          rowList.every((item) => item === rowList[0] && item != null);
        if (won)
          return {
            winner: rowList[0],
            squares: rowIndex,
          };
        won =
          columnList &&
          columnList.length === winnerLength &&
          columnList.every((item) => item === columnList[0] && item != null);
        if (won)
          return {
            winner: columnList[0],
            squares: columnIndex,
          };

       
      }
    }

    //win in cross
    for (let i = 0; i <= boardLength - winnerLength; i++) {
      for (let j = 0; j <= boardLength - winnerLength; j++) {
        let slash = [];
        let backSlash = [];
        let slashIndex = [];
        let backSlashIndex = [];
        for (let k = 0; k < winnerLength; k++) {
          slash.push(squares[(k + i) * boardLength + j + k]);
          backSlash.push(
            squares[(k + i) * boardLength + j + (winnerLength - k - 1)]
          );

          slashIndex.push((k + i) * boardLength + j + k);
          backSlashIndex.push(
            (k + i) * boardLength + j + (winnerLength - k - 1)
          );
        }

        won =
          slash &&
          slash.length === winnerLength &&
          slash.every((item) => item === slash[0] && item != null);
        if (won)
          return {
            winner: slash[0],
            squares: slashIndex,
          };
        won =
          backSlash &&
          backSlash.length === winnerLength &&
          backSlash.every((item) => item === backSlash[0] && item != null);
        if (won)
          return {
            winner: backSlash[0],
            squares: backSlashIndex,
          };
        // console.log(`slash=> i=${i}, j=${j}  ==== ${slash.toString()}`);
        // console.log(`backSlash=> i=${i}, j=${j} ==== ${backSlash.toString()}`);
      }
    }
    return null;
  };

  const calculateWinner1 = (squares) => {
    //   newCalculateWinner(squares);
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return {
          winner: squares[a],
          squares: lines[i],
        };
      }
    }
    return null;
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";

    return (
      <div key={move}>
        <li>
          <button onClick={() => jumpTo(move)}>{desc}</button>
        </li>
        <CalculateRowCol index={clickedIndex[move] + 1} />
      </div>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner.winner;
  } else if (stepNumber === 9) {
    status = "No one win.";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          winsquares={winner ? winner.squares : []}
          squares={current.squares}
          lastIndex={clickedIndex[stepNumber - 1]}
          onClick={handleClick}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
