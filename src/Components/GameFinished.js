import { useNavigate } from "react-router-dom";

const GameFinished = ({winner}) => {

  const navigate = useNavigate();

  const goHome = () => navigate("/")

  return (
    <div className="gameFinished">
      <h4>El juego ha terminado!!!</h4>
      {winner && <h3>El ganador fue: Jugador {winner}</h3>}
      <button className="btn btn-primary" onClick={() => goHome()}>Go Home</button>
    </div>
  );
};

export default GameFinished;
