const BoardRow = ({ elementsCount }) => {
  const elementSize = elementsCount === 4 ? "col-2" : "col-1";

  return (
    <div className="row col-12 d-flex flex-row justify-content-between align-items-center">
      {[...Array(elementsCount)].map((r) => (
        <div className={`${elementSize} p-0 element`}>
          <img className="img-fluid element__image" src="./question.jpg" alt="question" />
        </div>
      ))}
    </div>
  );
};

export default BoardRow;
