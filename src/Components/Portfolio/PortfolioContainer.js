import React from "react";
import portfolioData from "./PortfolioData";
import PortfolioImage from "./PortfolioImage";
import PortfolioDescription from "./PortfolioDescription";

class PortfolioContainer extends React.Component {
  state = {
    index: 0
  };

  handleArrowClick = increment => {
    let newIndex = this.state.index + increment;
    if (newIndex > 2) {
      this.setState({
        index: 0
      });
    } else if (newIndex < 0) {
      this.setState({
        index: 2
      });
    } else {
      this.setState({
        index: newIndex
      });
    }
  };

  render() {
    return (
      <div id="portfolio">
        <PortfolioImage
          project={portfolioData[this.state.index]}
          handleArrowClick={this.handleArrowClick}
        />
        <PortfolioDescription project={portfolioData[this.state.index]} />
      </div>
    );
  }
}

export default PortfolioContainer;

// onMouseEnter={this.hoverOn}
// onMouseLeave={this.hoverOff}
