import React from "react";
import image from "./../photos/top-photo.jpg";
import MenuList from "../Menu/MenuList.js";

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
      <div>
        {this.state.activeMenu ? (
          <MenuList toggleMenu={this.toggleMenu} />
        ) : null}
        <img src={image} alt="Lindsay Criswell" className="responsive" />
        <a href="#about-me">
          <i className="chevron circle down big icon yellowish bottom-middle" />
        </a>
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
