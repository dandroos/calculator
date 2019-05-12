import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="wrapper-label">
          Calculator
        </div>
        <Calculator />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
