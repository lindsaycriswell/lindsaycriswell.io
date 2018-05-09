import React from "react";
import image from "./../photos/curry.jpg";

const ResumeDivider = () => {
  return (
    <div>
      <img src={image} alt="Portfolio" className="responsive" />{" "}
      <a href="#resume">
        <i className="chevron circle down big icon pinkish bottom-middle" />
      </a>
    </div>
  );
};

export default ResumeDivider;
