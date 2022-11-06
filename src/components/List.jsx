import React, {useState} from "react";
import ListElem from "./ListElem";
import Sorter from "./Sorter";
import './list.scss'

const List = ({ listMusic, setListMusic }) => {
  const [grid, setGrid] = useState(false);

  return (
    <div className="list-container">
      <Sorter
        setListMusic={setListMusic}
        listMusic={listMusic}
        grid={grid}
        setGrid={setGrid} 
      />
      <ul className="list-list">
        {listMusic.map((music) => (
          <ListElem
            setListMusic={setListMusic}
            listMusic={listMusic}
            music={music}
            text={music.text}
            id={music.id}
            grid={grid}
            key={music.id}
            time={music.time}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
