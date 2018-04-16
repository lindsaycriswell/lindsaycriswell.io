import React from "react";
import image from "./../photos/top-photo.jpg";
import { Icon } from "semantic-ui-react";
import PageMenu from "../../PageMenu.js";

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
        {this.state.activeMenu ? <PageMenu /> : null}
        <img src={image} alt="Lindsay Criswell" className="responsive" />
        {this.state.activeMenu ? (
          <Icon
            className="top-right"
            name="close"
            size="big"
            onClick={this.toggleMenu}
          />
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
