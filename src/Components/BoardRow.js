import { useState } from "react";

const BoardRow = ({ elementsCount, elements, hasConcidence}) => {
  const elementSize = elementsCount === 4 ? "col-2" : "col-1";
  const [imageList, setImageList] = useState([...Array(elementsCount)].map(e => "./question.jpg"))
  
  const handleClick = (i) => {
    const newList = [...imageList]
    newList[i] = elements[i].img
    setImageList(newList)
    hasConcidence(elements[i].id, i, callback, elements[i].uniqueId)
  }

  const callback = (rowPosition) => {
    const newList = [...imageList]
    newList[rowPosition] = "./question.jpg"
    setImageList(newList)
  }

  return (
    <div className="row col-12 d-flex flex-row justify-content-between align-items-center">
      { elements && elements !== [] && elements.map((r, i) => (
        <div className={`${elementSize} p-0 element`}>
          <img className="img-fluid element__image" src={imageList[i]} alt="question" onClick={() => handleClick(i)}/>
        </div>
      ))}
    </div>
  );
};

export default BoardRow;

/**/