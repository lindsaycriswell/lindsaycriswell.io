import React from "react";

const ResumeContact = ({ contact: { title, link } }) => {
  return (
    <a href={link} alt={title} target="blank" style={{ display: "inline" }}>
      | {title}{" "}
    </a>
  );
};

export default ResumeContact;
