import React from "react";
import { useGameStore } from "../contexts/GameContext";
import { useObserver } from "mobx-react";

const Moves = () => {
  const gameStore = useGameStore();

  return useObserver(
    () =>
      gameStore.clickedIndex.length > 0 &&
      gameStore.history.map((step, move) => {
        const desc = move ? "Go to move #" + move : "Go to game start";
        const index = gameStore.clickedIndex[move] + 1;
        const row = Math.ceil(index / gameStore.boardLength);
        const column = index - (row - 1) * gameStore.boardLength;

        return (
          <div key={move}>
            <li>
              <button className="btn" onClick={() => gameStore.jumpTo(move)}>
                {desc}
              </button>
            </li>
            <div>{!isNaN(index) && `row: ${row}, columns: ${column}`}</div>
          </div>
        );
      })
  );
};

export default Moves;
