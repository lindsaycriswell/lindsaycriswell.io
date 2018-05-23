import React from "react";
import resumeData from "./ResumeData";
import ResumeContact from "./ResumeContact";

const ResumeContainer = () => {
  return (
    <div id="resume">
      <h1>{resumeData.header}</h1>
      {resumeData.contacts.map((contact, index) => (
        <ResumeContact contact={contact} key={index} />
      ))}
    </div>
  );
};

export default ResumeContainer;
