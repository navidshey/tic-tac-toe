import React from "react";
import { useGameStore } from "../contexts/GameContext";
import Board from "./Board";
import Moves from "./Moves";
import StartUp from "./StartUp";
import { observer } from "mobx-react-lite";
import * as Styles from "./../styles/game";
import { uid } from "../utils/uid";

const Game = observer(() => {
  const gameStore = useGameStore();
  return (
    <>
      {(!gameStore.boardRow || !gameStore.boardColumn) && <StartUp />}
      {gameStore.boardRow && gameStore.boardColumn && (
        <Styles.Game columns={gameStore.boardColumn}>
          <Styles.StartNew show={gameStore.isFinished}>
            {gameStore.isFinished && (
              <>
                {gameStore.status.toLowerCase().includes("win") && (
                  <Styles.Header>{gameStore.status}</Styles.Header>
                )}
                <Styles.Btn start="true" onClick={gameStore.startNewGame}>
                  Start A new Game
                </Styles.Btn>
              </>
            )}
          </Styles.StartNew>
          <Board />
          <Styles.GameInfo>
            <Styles.Header>
              {gameStore.status.toLowerCase().includes("win")
                ? "Finished"
                : gameStore.status}
            </Styles.Header>
            <table>
              <tbody>
                <tr key={uid()}>
                  <Styles.TableHeader>player 1(X)</Styles.TableHeader>
                  <Styles.TableHeader>player 2(O)</Styles.TableHeader>
                </tr>
                <Moves />
              </tbody>
            </table>
          </Styles.GameInfo>
        </Styles.Game>
      )}
    </>
  );
});

export default Game;
