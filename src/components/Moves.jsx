import React from "react";
import { useGameStore } from "../contexts/GameContext";
import { observer } from "mobx-react-lite";
import * as Styles from "./../styles/game";
import { uid } from "../utils/uid";


const Moves = observer(() => {
  const gameStore = useGameStore();

  return (
    gameStore.clickedIndex.length > 0 &&
    gameStore.history.map((step, move) => {
      const desc = !isNaN(move) ? "Move #" + (+move+1) : undefined;
      const index = gameStore.clickedIndex[move] + 1;
      const row = Math.ceil(index / gameStore.boardColumn);
      const column = index - (row - 1) * gameStore.boardColumn;

      return (
        <>
          {desc && !isNaN(row) && (
            <tr key={uid()}>
              <Styles.TableCell>
                {move % 2 == 1 && (
                  <>
                    <Styles.Btn onClick={() => gameStore.jumpTo(move+1)}>
                      {desc}
                      <div>
                        {!isNaN(index) && `row: ${row}, columns: ${column}`}
                      </div>
                    </Styles.Btn>{" "}
                  </>
                )}
              </Styles.TableCell>
              <Styles.TableCell>
                {move % 2 == 0 && (
                  <>
                    <Styles.Btn onClick={() => gameStore.jumpTo(move+1)}>
                      {desc}
                      <div>
                        {!isNaN(index) && `row: ${row}, columns: ${column}`}
                      </div>
                    </Styles.Btn>{" "}
                  </>
                )}
              </Styles.TableCell>
            </tr>
          )}
        </>
      );
    })
  );
});

export default Moves;
