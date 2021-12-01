import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GameFinished = ({ganador}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { finished } = location.state || {};

  const goHome = () => navigate("/")

  useEffect(() => {
      console.log(finished)
    //!finished && navigate("/");
  },[]);

  return (
    <div className="gameFinished">
      <h4>El juego ha terminado, que deseas hacer?</h4>
      {ganador && <h3>El ganador fue: {ganador}</h3>}
      <button className="btn btn-primary" onClick={() => goHome()}>Go Home</button>
    </div>
  );
};

export default GameFinished;
