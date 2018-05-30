import React from "react";

const PortfolioLinks = ({ project: { github, demo } }) => {
  return (
    <div>
      <div className={"section-div"}>
        <div className={"inline-block"}>
          <a href={github} target="blank">
            <i className={"github big grayish icon"} />
            <h6 className="grayish">CODE</h6>
          </a>
        </div>
        <div className={"inline-block"}>
          <a href={demo} target="blank">
            <i className={"play circle outline grayish big icon"} />
            <h6 className="grayish">DEMO</h6>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioLinks;
