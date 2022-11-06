import React from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown} from "react-icons/ai";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import './sorter.scss'

const Sorter = ({grid, setGrid, listMusic, setListMusic }) => {
  const sortUp = () => {
    setListMusic([].concat(listMusic.sort((a, b) => (a.id > b.id ? 1 : -1))));
  };

  const sortDown = () => {
    setListMusic([].concat(listMusic.sort((a, b) => (a.id > b.id ? -1 : 1))));
  };

  const sortNameUp = () => {
    setListMusic(
      [].concat(listMusic.sort((a, b) => (a.text > b.text ? 1 : -1)))
    );
  };

  const sortNameDown = () => {
    setListMusic(
      [].concat(listMusic.sort((a, b) => (a.text > b.text ? -1 : 1)))
    );
  };

  const sortTimeUp = () => {
    setListMusic(
      [].concat(listMusic.sort((a, b) => (a.time > b.time ? 1 : -1)))
    );
  };

  const sortTimeDown = () => {
    setListMusic(
      [].concat(listMusic.sort((a, b) => (a.time > b.time ? -1 : 1)))
    );
  };

  const handlerGrid = () => {
    setGrid(!grid);
    console.log(grid)
  };

  return (
    <div
      className="sorter"
      style={{ display: `${listMusic.length === 0 ? "none" : "flex"}` }}
    >
      <button onClick={sortUp}>
        id <AiOutlineArrowUp />
      </button>
      <button onClick={sortDown}>
        id <AiOutlineArrowDown />
      </button>
      <button onClick={sortNameUp}>
        nazwa <AiOutlineArrowUp />
      </button>
      <button onClick={sortNameDown}>
        nazwa <AiOutlineArrowDown />
      </button>
      <button onClick={sortTimeUp}>
        czas <AiOutlineArrowUp />
      </button>
      <button onClick={sortTimeDown}>
        czas <AiOutlineArrowDown />
      </button>

      <button className="grid" onClick={handlerGrid}>
        <BsFillGrid3X2GapFill style={{fill:`${grid === true ? '#ff6f47' : '#F4F6FA' }`}}/>
      </button>
    </div>
  );
};

export default Sorter;
