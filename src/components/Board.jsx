import React from "react";
import { useGameStore } from "./../contexts/GameContext";
import { useObserver } from "mobx-react";
import "./index.css";

const Board = () => {
  const gameStore = useGameStore();

  const createBoard = () => {
    let board = [];

    for (let i = 0; i < gameStore.boardLength; i++) {
      let children = [];
      for (let j = 0; j < gameStore.boardLength; j++) {
        children.push(renderSquare(gameStore.boardLength * i + j));
      }
      board.push(
        <div key={`row-${i}`} className="board-row">
          {children}
        </div>
      );
    }

    return board;
  };

  const renderSquare = (cellIndex) => {
    return (
      <button
        key={`cell-${cellIndex}`}
        className={setHighLight(cellIndex) ? "current square" : "square"}
        onClick={() => gameStore.handleSquareClick(cellIndex)}
      >
        {gameStore.current &&
          gameStore.current.squares &&
          gameStore.current.squares[cellIndex]}
      </button>
    );
  };

  const setHighLight = (cellIndex) => {
    return (
      gameStore.lastIndex === cellIndex ||
      (gameStore.hasWinner && gameStore.hasWinner.squares.includes(cellIndex))
    );
  };

  return useObserver(() => <div>{createBoard()}</div>);
};

export default Board;
