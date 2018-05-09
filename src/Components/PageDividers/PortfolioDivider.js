import React from "react";
import image from "./../photos/nyc.jpg";

const PortfolioDivider = () => {
  return (
    <div>
      <img src={image} alt="Portfolio" className="responsive" />
      <a href="#portfolio">
        <i className="chevron circle down big icon whitish bottom-middle" />
      </a>
    </div>
  );
};

export default PortfolioDivider;
