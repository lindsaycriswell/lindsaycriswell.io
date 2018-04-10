import React, { Component } from "react";
import "./App.css";
import BannerImage from "./Components/PageDividers/BannerImage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BannerImage />
      </div>
    );
  }
}

export default App;

// <div style={{ height: "2000px" }}>
//   <a href="#click">LC MAKES STUFF</a>
// </div>
// <div id="click" style={{ height: "2000px" }}>
//   DID THIS WORK?
// </div>
