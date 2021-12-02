import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GameFinished from "./GameFinished";
import { getRandomRows } from "./Items";
import Puntuaciones from "./Puntuaciones";
import Rows from "./Rows";

const Board = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { singlePlayer, boardSize } = location.state || {};
  const rowsCount = boardSize || 4;
  const totalItems = (boardSize * boardSize) / 2;

  const [rowItems, setRowItems] = useState([]);
  const [clicked, setClicked] = useState();
  const [coincidences, setCoincidences] = useState([]);
  const [currentTurn, setCurrentTurn] = useState(1);
  const [playerOnePoints, setPlayerOnePoints] = useState(0);
  const [playerTwoPoints, setPlayerTwoPoints] = useState(0);
  const [gameNumber, setGameNumber] = useState(0);
  const [winner, setWinner] = useState();

  const alreadyFounded = (id) => coincidences.includes(id);

  const oppositeTurn = () => (currentTurn === 1 ? 2 : 1);

  const increasePoints = () => {
    currentTurn === 1
      ? setPlayerOnePoints(playerOnePoints + 1)
      : setPlayerTwoPoints(playerTwoPoints + 1);
  };

  const changeTurn = () => !singlePlayer && setCurrentTurn(oppositeTurn());

  const playAgain = () => {
    setRowItems(getRandomRows(totalItems, boardSize, rowsCount));
    setClicked();
    setCoincidences([]);
    setPlayerOnePoints(0);
    setPlayerTwoPoints(0);
    setWinner();
    setGameNumber(gameNumber + 1)
  };

  useEffect(() => !boardSize && navigate("/"));

  useEffect(() => {
    if (coincidences.length === totalItems) {
      setWinner(playerOnePoints > playerTwoPoints ? 1 : 2);
    }
  }, [coincidences]);

  useEffect(() => {
    setRowItems(getRandomRows(totalItems, boardSize, rowsCount));
  }, [singlePlayer, boardSize, totalItems, rowsCount]);

  const hasConcidence = (id, rowPosition, callback, uniqueId) => {
    if (!alreadyFounded(id)) {
      if (clicked && id === clicked.id && uniqueId !== clicked.uniqueId) {
        increasePoints();
        changeTurn();
        setCoincidences([...coincidences, id]);
        setClicked(undefined);
      } else if (clicked && id !== clicked.id) {
        setTimeout(() => {
          callback(rowPosition);
          clicked.callback(clicked.rowPosition);
        }, [300]);
        setClicked(undefined);
        changeTurn();
      } else {
        setClicked({ id, rowPosition, callback, uniqueId });
      }
    }
  };

  return (
    <div className="col-12 board">
      <h1 className="text-center col-12">NBA Memory Game!</h1>
      <Puntuaciones
        singlePlayer={singlePlayer}
        playerOnePoints={playerOnePoints}
        playerTwoPoints={playerTwoPoints}
        currentTurn={currentTurn}
      />
      <div>
        <Rows
          rowItems={rowItems}
          rowsCount={rowsCount}
          hasConcidence={hasConcidence}
          gameNumber={gameNumber}
        />
      </div>
      {winner && <GameFinished winner={winner} playAgain={playAgain} />}
    </div>
  );
};

export default Board;
