import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  render() {
    return (
      <main className="Container">
        <Counters />
      </main>
    );
  }
}

export default App;
