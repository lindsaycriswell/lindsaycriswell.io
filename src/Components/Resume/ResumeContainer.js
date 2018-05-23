import React from "react";
import resumeData from "./ResumeData";
import ResumeContact from "./ResumeContact";

const ResumeContainer = () => {
  return (
    <div id="resume" className="section-div">
      <h1>{resumeData.header}</h1>
      {resumeData.contacts.map((contact, index) => (
        <ResumeContact contact={contact} key={index} />
      ))}{" "}
      |
      <p className="left-aligned">{resumeData.summary}</p>
    </div>
  );
};

export default ResumeContainer;
