import BoardRow from "./BoardRow";

const Rows = ({ rowsCount, rowItems, hasConcidence, gameNumber}) => {

  return [...Array(rowsCount).keys()].map((r) => (
    <BoardRow
      elementsCount={rowsCount}
      key={`row-${r}`}
      elements={rowItems[r]}
      hasConcidence={hasConcidence}
      gameNumber={gameNumber}
    />
  ));
};

export default Rows;
