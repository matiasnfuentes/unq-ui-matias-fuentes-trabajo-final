import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import GameFinished from "./GameFinished";
import { getRandomRows } from "../Data/Items";
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

  const changeTurn = () => {
    !singlePlayer && setCurrentTurn(oppositeTurn());
    setClicked(undefined);
  };

  const playAgain = () => {
    setRowItems(getRandomRows(totalItems, boardSize, rowsCount));
    setClicked();
    setCoincidences([]);
    setPlayerOnePoints(0);
    setPlayerTwoPoints(0);
    setWinner();
    setGameNumber(gameNumber + 1);
  };

  useEffect(() => !boardSize && navigate("/"));

  useEffect(() => {
    coincidences.length === totalItems &&
      setWinner(
        playerOnePoints > playerTwoPoints
          ? 1
          : playerTwoPoints > playerOnePoints
          ? 2
          : 3
      );
  }, [coincidences]);

  useEffect(() => {
    setRowItems(getRandomRows(totalItems, boardSize, rowsCount));
  }, [singlePlayer, boardSize, totalItems, rowsCount]);

  const hasConcidence = (id, rowPosition, callback, uniqueId) => {
    if (!alreadyFounded(id)) {
      if (clicked && id === clicked.id && uniqueId !== clicked.uniqueId) {
        increasePoints();
        setCoincidences([...coincidences, id]);
        changeTurn();
      } else if (clicked && id !== clicked.id) {
        setTimeout(() => {
          callback(rowPosition);
          clicked.callback(clicked.rowPosition);
        }, [300]);
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
      {rowItems.length === 0 ? (
        <HashLoader
          color={"#0d6efd"}
          loading={true}
          css={"display: block; margin: 0 auto; border-color: red;"}
          size={300}
        />
      ) : (
        <div>
          <Rows
            rowItems={rowItems}
            rowsCount={rowsCount}
            hasConcidence={hasConcidence}
            gameNumber={gameNumber}
          />
        </div>
      )}

      {winner && <GameFinished winner={winner} playAgain={playAgain} />}
    </div>
  );
};

export default Board;
