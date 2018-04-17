import React from "react";
import { Icon } from "semantic-ui-react";

const AboutMe = () => {
  return (
    <div id="about-me" className="section-div">
      <h3>ABOUT ME</h3>
      <Icon name="anchor" />
      <p className="margin-top">
        I am a full stack web developer dedicated to creating innovative web
        experiences that help users engage with their passions.
      </p>
      <p>
        For me, programming is both a thrilling problem-solving exercise and a
        creative outlet for exploring my interests and sharing them with others.
      </p>
    </div>
  );
};

export default AboutMe;
