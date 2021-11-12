import React from "react";
import { useGameStore } from "../contexts/GameContext";
import Board from "./Board";
import Moves from "./Moves";
import StartUp from "./StartUp";
import { useObserver } from "mobx-react";
import "./index.css";

const Game = () => {
  const gameStore = useGameStore();
  // useEffect(()=>{
  //   gameStore.history.push({
  //       squares: Array(gameStore.boardLength * gameStore.boardLength).fill(null),
  //     });
  // },[]);

  return useObserver(() => (
    <>
      {!gameStore.boardLength && <StartUp />}
      {gameStore.boardLength && (
        <div className="game">
          {gameStore.isFinished && (
            <button className="btn start-new" onClick={gameStore.startNewGame}>
              Start A new Game
            </button>
          )}
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div className="header">{gameStore.status}</div>
            <ol>
              <Moves />
            </ol>
          </div>
        </div>
      )}
    </>
  ));
};

export default Game;
