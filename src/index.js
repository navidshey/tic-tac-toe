import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GameProvider } from "./contexts/GameContext";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
