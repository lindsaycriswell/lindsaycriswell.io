import React from "react";

const PortfolioDescription = ({ project }) => {
  return (
    <div className="section-div">
      <h3>{project.title.toUpperCase()}</h3>
      <i className={project.icon + " icon"} />
      <p className="margin-top">{project.description}</p>
      <p>{project.tech}</p>
    </div>
  );
};

export default PortfolioDescription;
