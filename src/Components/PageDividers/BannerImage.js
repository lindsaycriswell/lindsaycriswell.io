import React from "react";
import image from "./../photos/top-photo.jpg";
import { Icon } from "semantic-ui-react";

const BannerImage = () => {
  return (
    <div>
      <img src={image} alt="Lindsay Criswell" className="responsive" />
    </div>
  );
};

export default BannerImage;

// <button>
//   <Icon name="home" size="massive" />
// </button>
