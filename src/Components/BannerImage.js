import React from "react";
import PageDivider from "./PageDivider";
// import image from "./photos/top-photo.jpg";
import MenuList from "./MenuList.js";

class BannerImage extends React.Component {
  state = {
    activeMenu: false
  };

  toggleMenu = e => {
    this.setState({
      activeMenu: !this.state.activeMenu
    });
  };

  render() {
    return (
      <div id="top">
        {this.state.activeMenu ? (
          <MenuList toggleMenu={this.toggleMenu} />
        ) : null}
        <PageDivider
          section={"about-me"}
          alt={"Lindsay Criswell"}
          color={"yellowish"}
        />

        {this.state.activeMenu ? (
          <div>
            <i
              className="close icon top-right white"
              onClick={this.toggleMenu}
            />
          </div>
        ) : (
          <div>
            <i
              className="sidebar big icon top-right yellowish"
              onClick={this.toggleMenu}
            />
          </div>
        )}
      </div>
    );
  }
}

export default BannerImage;

// Photo font: Arial Unicode MS, 150pt
