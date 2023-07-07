import React from "react";
import Watch from "./Watch";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="website-url">
        <a href="https://codingissimple.com">Coding is Simple</a>
      </div>
      <Watch />
    </div>
  );
};

export default App;
