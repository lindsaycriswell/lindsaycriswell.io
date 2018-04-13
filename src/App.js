import React, { Component } from "react";
import "./App.css";
import BannerImage from "./Components/PageDividers/BannerImage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BannerImage />
        <h1>Portfolio Divider</h1>
        <h1>Portfolio</h1>
        <h1>Resume Divider</h1>
        <h1>Resume</h1>
        <h1>Contacts Divider</h1>
        <h1>Contacts</h1>
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
