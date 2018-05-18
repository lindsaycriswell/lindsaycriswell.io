import React from "react";

class PageDivider extends React.Component {
  render() {
    return (
      <div>
        <img
          src={"./photos/DividerPhotos/" + this.props.section + ".jpg"}
          alt={this.props.alt}
          className="responsive"
        />
        <a href={"#" + this.props.section}>
          <i
            className={
              "chevron circle down big icon bottom-middle " + this.props.color
            }
          />
        </a>
      </div>
    );
  }
}

export default PageDivider;
