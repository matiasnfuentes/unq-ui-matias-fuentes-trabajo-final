import { useEffect, useState } from "react";
import Item from "./Item";

const BoardRow = ({
  elementsCount,
  elements,
  hasConcidence,
  gameNumber,
  turningBack,
}) => {
  const elementSize = elementsCount === 4 ? "col-2" : "col-1";

  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    setImageList([...Array(elementsCount)].map(() => "./img/question.jpg"));
  }, [gameNumber]);

  const callback = (rowPosition) => {
    const newList = [...imageList];
    newList[rowPosition] = "./img/question.jpg";
    setImageList(newList);
  };

  const handleClick = (i) => {
    if (!turningBack) {
      const newList = [...imageList];
      newList[i] = elements[i].img;
      setImageList(newList);
      hasConcidence(elements[i].id, i, callback, elements[i].uniqueId);
    }
  };

  return (
    <div className="row col-12 d-flex flex-row justify-content-between align-items-center">
      {imageList.length !== 0 &&
        elements.map((r, i) => (
          <Item
            key={r.uniqueId}
            image={imageList[i]}
            rowPosition={i}
            elementSize={elementSize}
            handleClick={handleClick}
          />
        ))}
    </div>
  );
};

export default BoardRow;
