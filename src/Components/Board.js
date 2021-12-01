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
  const [finished, setGameFinished] = useState(false)
  const [ganador, setGanador] = useState()

  useEffect(() => {
    if(coincidences.length === itemsNeed){
      setGanador("Jugador 1")
      setGameFinished(true)
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
        setCoincidences([...coincidences,id])
        setClicked(undefined)
      } else if (clicked && (id !== clicked.id)){
        setTimeout(() => {
          callback(rowPosition)
          clicked.callback(clicked.rowPosition)
        }, [300]);
        setClicked(undefined)
      } else {
        setClicked({id, rowPosition, callback, uniqueId})
      }
    }
  }

  return (
    <div className="col-12">
      <Puntuaciones singlePlayer={singlePlayer}/>
      <div>
        {[...Array(rowsCount).keys()].map((r) => (
          <BoardRow elementsCount={rowsCount} key={`row-${r}`} elements={rowItems[r]} hasConcidence={hasConcidence} />
        ))}
      </div>
      {finished && <GameFinished ganador={ganador}/> }
    </div>
  );
};

export default Board;
