import React, {useState} from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [inputText, setInputText] = useState('')
  const [listMusic, setListMusic] = useState([])

  return (
    <div className="App">
      <header>
        <h1>musicfav</h1>
        <hr/>
      </header>
      <Form listMusic={listMusic} setListMusic={setListMusic} inputText={inputText} setInputText={setInputText}/>
      <List setListMusic={setListMusic} listMusic={listMusic}/>
    </div>
  );
}

export default App;
