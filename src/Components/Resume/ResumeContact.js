import React from "react";

const ResumeContact = ({ contact: { contact, link } }) => {
  return (
    <a href={link} alt={contact} target="blank" style={{ display: "inline" }}>
      | {contact}{" "}
    </a>
  );
};

export default ResumeContact;
