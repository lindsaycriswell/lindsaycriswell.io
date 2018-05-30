import React from "react";
import resumeData from "./ResumeData";
import ResumeContact from "./ResumeContact";
import ResumeProject from "./ResumeProject";
import ResumeJob from "./ResumeJob";
import ResumeSchool from "./ResumeSchool";

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
        <h3>TECHNICAL SKILLS</h3>
        <p>{resumeData.technicalSkills}</p>
        <h3>EMPLOYMENT HISTORY</h3>
        {resumeData.employment.map((job, index) => (
          <ResumeJob job={job} key={index} />
        ))}
        <h3>EDUCATION</h3>
        {resumeData.education.map((school, index) => (
          <ResumeSchool school={school} key={index} />
        ))}
      </div>
      <a
        href="https://docs.google.com/presentation/d/e/2PACX-1vTGUh0p6whOLGpVDiegxEqZcjJyUW_C647awMBCRdE6Syzh_-MgVGETs_dQsAkpWmyz4Db4gMCjwE_T/pub?start=false&loop=false&delayms=3000"
        target="blank"
      >
        <i className="print icon large" />
        <p>Printer Friendly</p>
      </a>
    </div>
  );
};

export default ResumeContainer;
