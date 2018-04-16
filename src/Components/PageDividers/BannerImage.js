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
        {this.state.activeMenu ? (
          <Icon className="top-right" name="close" onClick={this.toggleMenu} />
        ) : (
          <Icon
            className="top-right"
            name="sidebar"
            size="big"
            onClick={this.toggleMenu}
          />
        )}
      </div>
    );
  }
}

export default BannerImage;
