import React, { Component } from "react";
import "./App.css";
import BannerImage from "./Components/BannerImage";
import AboutMe from "./AboutMe.js";
import PageDivider from "./Components/PageDivider";
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
        <PageDivider
          section={"portfolio"}
          alt={"Portfolio"}
          color={"whitish"}
        />
        <PortfolioContainer />
        <PageDivider section={"resume"} alt={"Resume"} color={"pinkish"} />
        <ResumeContainer />
        <PageDivider section={"contact"} alt={"Contact"} color={"tealish"} />
        <ContactsContainer />
        <a href={"#top"}>
          <i className={"chevron circle up big icon tealish"} />
        </a>
      </div>
    );
  }
}

export default App;
