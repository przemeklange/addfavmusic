import React from "react";
import { AiFillHeart, AiOutlineDelete } from "react-icons/ai";

const ListElem = ({time ,grid, id, text, listMusic, setListMusic, music }) => {
  const deleteHandler = () => {
    setListMusic(listMusic.filter((el) => el.id !== music.id));
  };

  const addToWish = () => {
    setListMusic(
      listMusic.map((item) => {
        if (item.id === music.id) {
          return {
            ...item,
            wish: !item.wish,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="list" style={{width: `${grid === true ? "47%" : "100%"}`}}>
      <li className={`list-item`}>
        <div className="wrapper">
          {id} {text} {time}
        </div>
      </li>
      <button onClick={deleteHandler} className="trash-btn">
        <AiOutlineDelete/>
      </button>
      <button
        onClick={addToWish}
        className={`wish-btn ${music.wish ? `active` : `null`}`}
      >
       <AiFillHeart/>
      </button>
    </div>
  );
};

export default ListElem;
