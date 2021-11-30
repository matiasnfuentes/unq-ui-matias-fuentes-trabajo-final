import { Link } from "react-router-dom";

const Puntuaciones = ({ singlePlayer }) => {
  return (
    <div className="row d-flex flex-row justify-content-around mb-5">
      <div className="col-2">
        <Link className="btn btn-primary" to="/">
          Volver a empezar
        </Link>
      </div>

      <p className="fs-4 col-4">
        Modo de juego: {singlePlayer ? "Un jugador" : "Multijugador"}
      </p>
      <p className="fs-4 col-4">Putuaciones: 0</p>
    </div>
  );
};

export default Puntuaciones;
