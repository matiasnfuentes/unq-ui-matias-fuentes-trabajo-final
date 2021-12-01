import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BoardRow from "./BoardRow";
import GameFinished from "./GameFinished";
import getRandom from "./Items";
import Puntuaciones from "./Puntuaciones";

const Board = () => {
  const location = useLocation();
  const { singlePlayer, boardSize } = location.state || {};
  const rowsCount = boardSize || 4;
  const itemsNeed = (boardSize * boardSize) / 2
  const [rowItems, setRowItems] = useState([])
  const [clicked, setClicked] = useState()
  const [coincidences, setCoincidences] = useState([])
  const alreadyFounded = (id) => coincidences.includes(id)
  const [winner, setWinner] = useState()
  const [currentTurn, setCurrentTurn] = useState(1)
  const [playerOnePoints, setPlayerOnePoints] = useState(0)
  const [playerTwoPoints, setPlayerOneTwo] = useState(0)

  const oppositeTurn = () => (currentTurn === 1) ? 2 : 1  

  useEffect(() => {
    if(coincidences.length === itemsNeed){
      setWinner((playerOnePoints > playerTwoPoints) ? 1 : 2 )
      }
    }
  ,[coincidences])

  useEffect(() => {
    const items = getRandom(itemsNeed)
    let shuffled = [...items, ...items].sort(() => 0.5 - Math.random());
    shuffled = shuffled.map((i, index) => ({...i, uniqueId: index}) )
    const rows = [...Array(rowsCount).keys()].map( r => shuffled.splice(0, boardSize))
    setRowItems(rows)
  }, [singlePlayer, boardSize, itemsNeed, rowsCount])

  const hasConcidence = (id, rowPosition, callback, uniqueId) => {
    if (!alreadyFounded(id)){
      if (clicked && (id === clicked.id) && (uniqueId !== clicked.uniqueId)) {
        (currentTurn === 1) ? setPlayerOnePoints(playerOnePoints + 1) : setPlayerOneTwo(playerTwoPoints + 1)
        !singlePlayer && setCurrentTurn(oppositeTurn())
        setCoincidences([...coincidences,id])
        setClicked(undefined)
      } else if (clicked && (id !== clicked.id)){
        setTimeout(() => {
          callback(rowPosition)
          clicked.callback(clicked.rowPosition)
        }, [300]);
        setClicked(undefined)
        !singlePlayer && setCurrentTurn(oppositeTurn())
      } else {
        setClicked({id, rowPosition, callback, uniqueId})
      }
    }
  }

  return (
    <div className="col-12">
      <Puntuaciones singlePlayer={singlePlayer} playerOnePoints={playerOnePoints} playerTwoPoints={playerTwoPoints} currentTurn={currentTurn}/>
      <div>
        {[...Array(rowsCount).keys()].map((r) => (
          <BoardRow elementsCount={rowsCount} key={`row-${r}`} elements={rowItems[r]} hasConcidence={hasConcidence} />
        ))}
      </div>
      {winner && <GameFinished winner={winner}/> }
    </div>
  );
};

export default Board;
