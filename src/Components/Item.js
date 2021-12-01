const Item = ({ elementSize, image, rowPosition, handleClick }) => {
  return (
    <div className={`${elementSize} p-0 element`}>
      <img
        className={`img-fluid element__image`}
        src={image}
        alt="question"
        onClick={() => handleClick(rowPosition)}
      />
    </div>
  );
};

export default Item;
