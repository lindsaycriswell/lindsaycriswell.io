import React, { Component } from "react";
import "./App.css";
import BannerImage from "./Components/PageDividers/BannerImage";
import AboutMe from "./AboutMe.js";
import PageDivider from "./Components/PageDivider";
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
        <PageDivider
          section={"portfolio"}
          alt={"Portfolio"}
          color={"whitish"}
        />
        <PortfolioContainer />
        <PageDivider section={"resume"} alt={"Resume"} color={"pinkish"} />
        <ResumeContainer />
        <PageDivider section={"contacts"} alt={"Contacts"} color={"tealish"} />
        <ContactsContainer />
      </div>
    );
  }
}

export default App;
