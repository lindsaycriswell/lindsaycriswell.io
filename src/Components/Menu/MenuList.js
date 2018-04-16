import React from "react";
import { Menu } from "semantic-ui-react";

const MenuList = props => {
  const menuItems = ["About Me", "Portfolio", "Resume", "Contact"];
  console.log(menuItems);
  // Refactor menu items into individual components
  return (
    <Menu inverted vertical color="grey" className="top-right">
      <Menu.Item name="About Me">
        <a href="#about-me" onClick={props.toggleMenu}>
          About Me
        </a>
      </Menu.Item>

      <Menu.Item name="Portfolio">
        <a href="#portfolio">Portfolio</a>
      </Menu.Item>

      <Menu.Item name="Resume">
        <a href="resume">Resume</a>
      </Menu.Item>

      <Menu.Item name="Contact">
        <a href="#contact">Contact</a>
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
