import React from "react";
import { useGameStore } from "../contexts/GameContext";
import Board from "./Board";
import Moves from "./Moves";
import StartUp from "./StartUp";
import { useObserver } from "mobx-react";
import * as Styles from "./../styles/game";

const Game = () => {
  const gameStore = useGameStore();
  return useObserver(() => (
    <>
      {!gameStore.boardLength && <StartUp />}
      {gameStore.boardLength && (
        <Styles.Game columns={gameStore.boardLength}>
            <Styles.StartNew show={gameStore.isFinished}>
          {gameStore.isFinished && (
            <>
             {gameStore.status.toLowerCase().includes('win') && <Styles.Header>{gameStore.status}</Styles.Header> }
            <Styles.Btn start="true" onClick={gameStore.startNewGame}>
              Start A new Game
            </Styles.Btn>
            </>
          )}
          </Styles.StartNew>
          <Board />
          <Styles.GameInfo>
            <Styles.Header>{gameStore.status.toLowerCase().includes('win') ? "Finished" :gameStore.status}</Styles.Header>
            <table>
              <tbody>
                <tr key="table-header-row"><Styles.TableHeader>player 1(X)</Styles.TableHeader>
                <Styles.TableHeader>player 2(O)</Styles.TableHeader></tr>
                <Moves />
              </tbody>
            </table>
          </Styles.GameInfo>        
        </Styles.Game>
      )}
    </>
  ));
};

export default Game;
