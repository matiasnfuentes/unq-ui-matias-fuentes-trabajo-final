import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";
import Board from "./Board";
import GameFinished from "./GameFinished";
import Seleccion from "./SelectionScreen";

const App = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Seleccion />} />
          <Route exact path="/board" element={<Board/>} />
          <Route exact path="/game-finished" element={<GameFinished/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
