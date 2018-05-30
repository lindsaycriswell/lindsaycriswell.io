import React from "react";

const PortfolioDescription = ({
  project: { title, icon, description, tech }
}) => {
  return (
    <div>
      <h3>{title.toUpperCase()}</h3>
      <i className={icon + " icon"} />
      <p className="margin-top">{description}</p>
      <p>{tech}</p>
    </div>
  );
};

export default PortfolioDescription;
