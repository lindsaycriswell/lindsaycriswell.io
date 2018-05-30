import React from "react";
import resumeData from "./ResumeData";
import ResumeContact from "./ResumeContact";
import ResumeProject from "./ResumeProject";

const ResumeContainer = () => {
  return (
    <div id="resume" className="section-div">
      <h1>{resumeData.header}</h1>
      {resumeData.contacts.map((contact, index) => (
        <ResumeContact contact={contact} key={index} />
      ))}{" "}
      |
      <div className="left-aligned">
        <p>{resumeData.summary}</p>
        <h3>TECHNICAL PROJECTS</h3>
        {resumeData.technicalProjects.map((project, index) => (
          <ResumeProject project={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ResumeContainer;
