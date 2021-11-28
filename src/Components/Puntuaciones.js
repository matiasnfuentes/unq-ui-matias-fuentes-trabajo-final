const Puntuaciones = ({ singlePlayer }) => {
  return (
    <div className="row d-flex flex-row justify-content-around mb-5">
      <p className="fs-4 col-3">Modo de juego: {singlePlayer ? "Un jugador" : "Multijugador"}</p>
      <p className="fs-4 col-2">Putuaciones: 0</p>
    </div>
  );
};

export default Puntuaciones;
