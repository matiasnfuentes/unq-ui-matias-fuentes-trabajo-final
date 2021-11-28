import { useState } from "react";
import { Link } from "react-router-dom";

const SelectionScreen = () => {
  const [singlePlayer, setSinglePlayer] = useState(true);
  const singlePlayerStyle = singlePlayer
    ? "btn-primary"
    : "btn-outline-primary";
  const multiplayerStyle = !singlePlayer
    ? "btn-primary"
    : "btn-outline-primary";

  const [boardSize, setBoardSize] = useState(4);

  const sizeFourStyle =
    boardSize === 4 ? "btn-primary" : "btn-outline-primary";
  const sizeSixStyle = boardSize === 6 ? "btn-primary" : "btn-outline-primary";
  const sizeEightStyle =
    boardSize === 8 ? "btn-primary" : "btn-outline-primary";

  return (
    <>
      <div className="row col-xl-4 mb-5">
        <h2 className="mb-3 text-center">Cantidad de jugadores</h2>
        <div className="d-flex justify-content-around">
          <button
            type="button"
            onClick={() => setSinglePlayer(true)}
            className={`btn ${singlePlayerStyle}`}
          >
            Un jugador
          </button>
          <button
            type="button"
            onClick={() => setSinglePlayer(false)}
            className={`btn ${multiplayerStyle}`}
          >
            Dos Jugadores
          </button>
        </div>
      </div>

      <div className="row col-xl-4 mb-5">
        <h2 className="mb-3 text-center">Tamaño del tablero</h2>
        <div className="d-flex justify-content-around">
          <button
            type="button"
            onClick={() => setBoardSize(4)}
            className={`btn ${sizeFourStyle}`}
          >
            4 x 4
          </button>
          <button
            type="button"
            onClick={() => setBoardSize(6)}
            className={`btn ${sizeSixStyle}`}
          >
            6 x 6
          </button>
          <button
            type="button"
            onClick={() => setBoardSize(8)}
            className={`btn ${sizeEightStyle}`}
          >
            8 x 8
          </button>
        </div>
      </div>
      <div className="row col-xl-2 mb-5">
        <Link
          to="/board"
          state={{ singlePlayer: singlePlayer, boardSize: boardSize }}
          className="btn btn-primary"
        >
          Comenzar el juego!!
        </Link>
      </div>
    </>
  );
};

export default SelectionScreen;
