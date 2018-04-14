import React, { Component } from "react";
import "./App.css";
import BannerImage from "./Components/PageDividers/BannerImage";
import PortfolioDivider from "./Components/PageDividers/PortfolioDivider";
import ResumeDivider from "./Components/PageDividers/ResumeDivider";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BannerImage />
        <PortfolioDivider />
        <h1>Portfolio</h1>
        <ResumeDivider />
        // FINISH DEFINING FILE STRUCTURE
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
