import React from "react";
import { useGameStore } from "../contexts/GameContext";
import { useObserver } from "mobx-react";
import * as Styles from "./../styles/game";

const Moves = () => {
  const gameStore = useGameStore();

  return useObserver(
    () =>
      gameStore.clickedIndex.length > 0 &&
      gameStore.history.map((step, move) => {
        const desc = move ? "Go to move #" + move : undefined;
        const index = gameStore.clickedIndex[move] + 1;
        const row = Math.ceil(index / gameStore.boardLength);
        const column = index - (row - 1) * gameStore.boardLength;

        return (
          <>
  {desc && 
          <tr key={`${move}-${step}`}>
            <Styles.TableCell>{move%2==1 &&  <><Styles.Btn  onClick={() => gameStore.jumpTo(move)}>
                {desc}<div>{!isNaN(index) && `row: ${row}, columns: ${column}`}</div>
               </Styles.Btn> </> }</Styles.TableCell>
            <Styles.TableCell>{move%2==0 &&  <><Styles.Btn onClick={() => gameStore.jumpTo(move)}>
                {desc}<div>{!isNaN(index) && `row: ${row}, columns: ${column}`}</div>
               </Styles.Btn> </>}</Styles.TableCell>
          </tr>
      }
          </>
        );
      })
  );
};

export default Moves;
