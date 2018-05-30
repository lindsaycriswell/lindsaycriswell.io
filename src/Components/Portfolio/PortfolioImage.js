import React from "react";

const PortfolioImage = ({ project: { tag }, handleArrowClick }) => {
  return (
    <div>
      <img
        src={"./photos/PortfolioPhotos/" + tag + ".jpg"}
        alt={tag}
        className="portfolio-image"
      />
      <div>
        <i
          onClick={event => handleArrowClick(-1)}
          className={"chevron circle left big icon"}
        />
        <i
          onClick={event => handleArrowClick(1)}
          className={"chevron circle right big icon"}
        />
      </div>
    </div>
  );
};

export default PortfolioImage;
