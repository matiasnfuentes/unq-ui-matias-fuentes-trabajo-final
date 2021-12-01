import { useState } from "react";
import Item from "./Item";

const BoardRow = ({ elementsCount, elements, hasConcidence }) => {
  const elementSize = elementsCount === 4 ? "col-2" : "col-1";

  const [imageList, setImageList] = useState(
    [...Array(elementsCount)].map((e) => "./img/question.jpg")
  );

  const callback = (rowPosition) => {
    const newList = [...imageList];
    newList[rowPosition] = "./img/question.jpg";
    setImageList(newList);
  };

  const handleClick = (i) => {
    const newList = [...imageList];
    newList[i] = elements[i].img;
    setImageList(newList);
    hasConcidence(elements[i].id, i, callback, elements[i].uniqueId);
  };

  return (
    <div className="row col-12 d-flex flex-row justify-content-between align-items-center">
      {elements &&
        elements !== [] &&
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

/**/
