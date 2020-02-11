import React, { Component } from "react";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import ColorSquareContatiner from "./containers/ColorSquareContatiner";
import ColorListContainer from "./containers/ColorListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterContainer />
        <ColorSquareContatiner />
        <ColorListContainer />
      </div>
    );
  }
}

export default App;
