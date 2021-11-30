import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BoardRow from "./BoardRow";
import getRandom from "./Items";
import Puntuaciones from "./Puntuaciones";

const Board = () => {
  const location = useLocation();
  const { singlePlayer, boardSize } = location.state || {};
  const rowsCount = boardSize || 4;
  const itemsNeed = (boardSize * boardSize) / 2
  const [rowItems, setRowItems] = useState([])
  const [clicked, setClicked] = useState()
  console.log(clicked)

  useEffect(() => {
    const items = getRandom(itemsNeed)
    let shuffled = [...items, ...items].sort(() => 0.5 - Math.random());
    shuffled = shuffled.map((i, index) => ({...i, uniqueId: index}) )
    const rows = [...Array(rowsCount).keys()].map( r => shuffled.splice(0, boardSize))
    setRowItems(rows)
  }, [singlePlayer, boardSize, itemsNeed, rowsCount])

  const hasConcidence = (id, rowPosition, callback, uniqueId) => {
    if (clicked && (id !== clicked.id)) {
      console.log(clicked.id)
      console.log(id)
      const removeRowPosition = clicked.rowPosition
      const removeCallback = clicked.callback
      setClicked(undefined)
      removeCallback(removeRowPosition)
      callback(rowPosition)
    } else if (clicked && (id === clicked.id) && (uniqueId !== clicked.uniqueId)){
      console.log(clicked.id)
      console.log(id)
      setClicked(undefined)
    } else {
      setClicked({id, rowPosition, callback, uniqueId})
    }
  }

  return (
    <div className="col-12">
      <Puntuaciones singlePlayer={singlePlayer}/>
      <div>
        {[...Array(rowsCount).keys()].map((r) => (
          <BoardRow elementsCount={rowsCount} elements={rowItems[r]} hasConcidence={hasConcidence} />
        ))}
      </div>
    </div>
  );
};

export default Board;
