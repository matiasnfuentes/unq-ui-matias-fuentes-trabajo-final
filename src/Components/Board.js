import { useLocation } from "react-router-dom";
import BoardRow from "./BoardRow";
import Puntuaciones from "./Puntuaciones";

const Board = (props) => {
  const location = useLocation();
  const { singlePlayer, boardSize } = location.state || {};
  const rowsCount = boardSize || 4;

  return (
    <div className="col-12">
      <Puntuaciones singlePlayer={singlePlayer}/>
      <div>
        {[...Array(rowsCount)].map((r) => (
          <BoardRow elementsCount={rowsCount} />
        ))}
      </div>
    </div>
  );
};

export default Board;
