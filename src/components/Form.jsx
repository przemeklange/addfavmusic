import React, { useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import "./form.scss";

const Form = ({ inputText, setInputText, listMusic, setListMusic }) => {
  const handlerText = (e) => {
    setInputText(e.target.value);
  };

  const today = new Date();
  let [elem, setEleme] = useState(0);
  const sumbitHandler = (e) => {
    e.preventDefault();

    console.log(elem);
    if (inputText.length > 0) {
      elem++;
      setEleme(elem);
      setListMusic([
        ...listMusic,
        {
          text: inputText,
          wish: false,
          id: elem,
          time:
            today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds(),
        },
      ]);
      setInputText("");
    }
  };

  return (
    <div>
      <form>
        <input
          value={inputText}
          onChange={handlerText}
          type="text"
          className="list-input"
          placeholder="wpisz nazwę albumu"
        />
        <button onClick={sumbitHandler} className="list-button" type="submit">
          <AiOutlineFileAdd />
        </button>
      </form>
    </div>
  );
};

export default Form;
