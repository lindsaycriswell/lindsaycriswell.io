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
  // Change Dividers to Divider component with props - image name, color
  // Rethink menu items?
  render() {
    return (
      <div className="App">
        <BannerImage />
        {
          // insert arrows with a tags to different sections
        }
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
