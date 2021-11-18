import React from "react";
import { useGameStore } from "./../contexts/GameContext";
import * as Styles from "./../styles/game";
import "./../styles/board.css";
import { observer } from "mobx-react-lite";

const Board = observer(() => {
  const gameStore = useGameStore();
  const createBoard = () => {
    let board = [];

    for (let i = 0; i < gameStore.boardRow; i++) {
      let children = [];
      for (let j = 0; j < gameStore.boardColumn; j++) {
        children.push(renderSquare(gameStore.boardColumn * i + j));
      }
      board.push(
        <Styles.BoardRow key={`row-${i}`}>{children}</Styles.BoardRow>
      );
    }

    return board;
  };

  //TODO: There is a bug when using emotion. last clicked index not geting highlight
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

  return <div>{createBoard()}</div>;
  // return useObserver(() => <div>{createBoard()}</div>);
});

export default Board;
