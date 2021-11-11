import React from "react";
import Square from "./Square";
import "./index.css";

const boradLength = 4;
const Board = (props) => {
  const createBoard = () => {
    let board = [];

    for (let i = 0; i < boradLength; i++) {
      let children = [];
      for (let j = 0; j < boradLength; j++) {
        children.push(renderSquare(boradLength * i + j));
      }
      board.push(<div className="board-row">{children}</div>);
    }

    return board;
  };

  const renderSquare = (i) => {
    return (
      <Square
        winsquares={props.winsquares}
        value={props.squares[i]}
        isClicked={setHighLight(i)}
        onClick={() => props.onClick(i)}
      />
    );
  };

  const setHighLight = (i) => {
    if (props.winsquares)
      return (
        props.lastIndex === i ||
        (props.winsquares && props.winsquares.includes(i))
      );
  };

  return <div>{createBoard()}</div>;
};

export default Board;
