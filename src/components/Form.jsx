import React from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import './form.scss'

const Form = ({ inputText, setInputText, listMusic, setListMusic }) => {
  const handlerText = (e) => {
    setInputText(e.target.value);
  };

  let today = new Date();

  const sumbitHandler = (e) => {
    e.preventDefault();
    if (inputText.length > 0) {
      setListMusic([
        ...listMusic,
        { text: inputText, wish: false, id: Math.round(Math.random() * 1000), time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() },
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
