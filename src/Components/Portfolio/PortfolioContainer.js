import React from "react";
import portfolioData from "./PortfolioData";
import PortfolioImage from "./PortfolioImage";
import PortfolioDescription from "./PortfolioDescription";

class PortfolioContainer extends React.Component {
  state = {
    index: 0
  };

  render() {
    return (
      <div id="portfolio">
        <PortfolioImage project={portfolioData[this.state.index]} />
        <PortfolioDescription project={portfolioData[this.state.index]} />
      </div>
    );
  }
}

export default PortfolioContainer;

// onMouseEnter={this.hoverOn}
// onMouseLeave={this.hoverOff}
