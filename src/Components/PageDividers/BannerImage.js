import React from "react";
import image from "./../../photos/top-photo.png";

// FIX BACKGROUND IMAGES
const BannerImage = () => {
  return (
    <div style={{ backgroundImage: `url(${image})`, height: "100vh" }}>
      <h1>HI</h1>
    </div>
  );
};

export default BannerImage;
