import React from "react";
import image from "./../photos/top-photo.jpg";
import { Icon } from "semantic-ui-react";
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
          <Icon
            className="yellowish bottom-middle"
            name="chevron circle down"
            size="big"
          />
        </a>
        {this.state.activeMenu ? (
          <div>
            <Icon
              className="top-right white"
              name="close"
              onClick={this.toggleMenu}
            />
          </div>
        ) : (
          <div>
            <Icon
              className="top-right yellowish"
              name="sidebar"
              size="big"
              onClick={this.toggleMenu}
            />
          </div>
        )}
      </div>
    );
  }
}

export default BannerImage;
