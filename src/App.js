import React, { Component } from "react";
import "./App.css";
import BannerImage from "./Components/PageDividers/BannerImage";
import AboutMe from "./AboutMe.js";
import PortfolioDivider from "./Components/PageDividers/PortfolioDivider";
import ResumeDivider from "./Components/PageDividers/ResumeDivider";
import ContactsDivider from "./Components/PageDividers/ContactsDivider";
import PortfolioContainer from "./Components/Portfolio/PortfolioContainer";
import ResumeContainer from "./Components/Resume/ResumeContainer";
import ContactsContainer from "./Components/Contacts/ContactsContainer";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BannerImage />
        <AboutMe />
        <PortfolioDivider />
        <PortfolioContainer />
        <ResumeDivider />
        <ResumeContainer />
        <ContactsDivider />
        <ContactsContainer />
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
