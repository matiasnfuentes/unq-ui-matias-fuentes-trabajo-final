import { useNavigate } from "react-router-dom";

const GameFinished = ({winner, playAgain}) => {

  const navigate = useNavigate();

  const handleGoHome = () => navigate("/")
  const handlePlayAgain = () => playAgain()

  return (
    <div className="gameFinished">
      <h4>El juego ha terminado!!!</h4>
      {winner && <h3>El ganador fue: Jugador {winner}</h3>}
      <div className="col-12 d-flex justify-content-around mt-2">
      <button className="col-5 btn btn-primary" onClick={() => handlePlayAgain()}>Jugar otra vez</button>
      <button className="col-5 btn btn-primary" onClick={() => handleGoHome()}>Pantalla de selección</button>
      </div>
      
    </div>
  );
};

export default GameFinished;
