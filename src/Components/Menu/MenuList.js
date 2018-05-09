import React from "react";
import { Menu } from "semantic-ui-react";

const MenuList = props => {
  const menuItems = ["About Me", "Portfolio", "Resume", "Contact"];
  console.log(menuItems);

  return (
    <Menu inverted vertical color="grey" className="top-right-white">
      {menuItems.map(item => (
        <Menu.Item name={item} key={item}>
          <a
            href={`#${item
              .toLowerCase()
              .split(" ")
              .join("-")}`}
            onClick={props.toggleMenu}
          >
            {item}
          </a>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuList;
