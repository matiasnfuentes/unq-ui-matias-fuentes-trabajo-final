import { Link } from "react-router-dom";

const Puntuaciones = ({
  singlePlayer,
  playerOnePoints,
  playerTwoPoints,
  currentTurn,
}) => {
  return (
    <div>
      <div className={`row d-flex flex-row justify-content-center justify-content-sm-around ${singlePlayer ? "mb-sm-5" : "mb-2"}`}>
        <div className="col-12 col-sm-4 d-flex justify-content-center align-items-center mb-2 mb-sm-0">
          <Link className="btn btn-primary p-2 col-8 col-sm-12 col-xl-8" to="/">
            Volver a empezar
          </Link>
        </div>
        <div className="col-12 col-sm-8 mb-2 mb-sm-0">
          <p className="fs-2 text-center mb-sm-0">
            <strong>Modo de juego: </strong>
            {singlePlayer ? "Un jugador" : "Multijugador"}
          </p>
        </div>
      </div>
      {!singlePlayer && (
        <div className="row d-flex flex-row justify-content-around mb-5">
          <p className="fs-2 col-12 col-lg-5 col-xl-4 text-center">
            <strong>Turno actual: <span className={currentTurn===1 ? "playerBlue" : "playerRed"}>Jugador {currentTurn}</span> </strong>
          </p>

          <p className={`fs-2 col-6 col-lg-3 col-xl-4 text-center`}>
            <strong>Jugador 1:</strong> {playerOnePoints}
          </p>

          <p className="fs-2 col-6 col-lg-3 col-xl-4 text-center">
            <strong>Jugador 2:</strong> {playerTwoPoints}
          </p>
        </div>
      )}
    </div>
  );
};

export default Puntuaciones;
