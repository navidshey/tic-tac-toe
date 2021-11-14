import React from "react";
import { useLocalObservable } from "mobx-react";
import { createGameStore } from "../stores/gameStore";
import PropTypes from "prop-types";

const GameContext = React.createContext(null);

export const GameProvider = ({ children }) => {
  const gameStore = useLocalObservable(createGameStore);

  return (
    <GameContext.Provider value={gameStore}>{children}</GameContext.Provider>
  );
};

export const useGameStore = () => React.useContext(GameContext);

GameProvider.propTypes = {
  children: PropTypes.element
};