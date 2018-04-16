import React from "react";
import { Menu } from "semantic-ui-react";

const PageMenu = () => {
  return (
    <Menu inverted vertical color="grey" className="top-right">
      <Menu.Item name="About Me">About Me</Menu.Item>

      <Menu.Item name="Portfolio">Portfolio</Menu.Item>

      <Menu.Item name="Resume">Resume</Menu.Item>

      <Menu.Item name="Contact">Contact</Menu.Item>
    </Menu>
  );
};

export default PageMenu;
