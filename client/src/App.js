import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.js";
import Books from "./Books.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
              <Header/>
              <Books/>

        </div>
     
      </div>
    );
  }
}

export default App;
