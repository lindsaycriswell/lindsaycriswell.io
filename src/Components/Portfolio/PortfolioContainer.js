import React from "react";
import portfolioData from "./PortfolioData";

class PortfolioContainer extends React.Component {
  state = {
    index: 0
  };

  render() {
    console.log(portfolioData[this.state.index]);
    return (
      <div id="portfolio">
        <h1>Portfolio Container</h1>
      </div>
    );
  }
}

export default PortfolioContainer;

// onMouseEnter={this.hoverOn}
// onMouseLeave={this.hoverOff}
