import React, {useState} from "react"
import './App.css';

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <h1>Accordian Example</h1>
      <div className="container">
        <h2 onClick={() => setToggle(!toggle)}>{toggle ? "−" : "✚"} </h2>
        <h3>What is your name?</h3>
      </div>
      <p>{toggle ? "My name is Alok Nayan" : null}</p>
    </div>
  );
}

export default App;
