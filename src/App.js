import React, { Suspense} from "react";
import "./App.css";
import Game from "./components/Game";
import Spinner from "./components/commons/Spinner/Spinner";

function App() {
  return <Suspense fallback={<Spinner />}><Game /></Suspense>;
}

export default App;
