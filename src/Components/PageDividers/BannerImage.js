import React from "react";
import image from "./../photos/top-photo.jpg";
import { Icon } from "semantic-ui-react";

const BannerImage = () => {
  return (
    <div>
      <img src={image} alt="Lindsay Criswell" className="responsive" />
      <div className="top-right">
        <Icon name="sidebar" size="big" />
      </div>
    </div>
  );
};

export default BannerImage;
