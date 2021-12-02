import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GameFinished = ({ winner, playAgain }) => {
  const navigate = useNavigate();

  const goHome = () => navigate("/");
  const handlePlayAgain = () => playAgain();

  useEffect(() => {
    !winner && goHome()
  }, [winner])

  return (
    <div className="gameFinished">
      <h4>El juego ha terminado!!!</h4>
      {(winner === 3 ? (
          <h3>Hubo un empate</h3>
        ) : (
          <h3>El ganador fue: Jugador {winner}</h3>
        ))}
      <div className="col-12 d-flex justify-content-around mt-2">
        <button
          className="col-5 btn btn-primary"
          onClick={() => handlePlayAgain()}
        >
          Jugar otra vez
        </button>
        <button
          className="col-5 btn btn-primary"
          onClick={() => goHome()}
        >
          Pantalla de selección
        </button>
      </div>
    </div>
  );
};

export default GameFinished;
