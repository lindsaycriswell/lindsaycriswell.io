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
        I see programming as both a thrilling problem-solving exercise and a
        creative outlet for exploring my interests and sharing them with others.
      </p>
      <p>I'm a California expat living in New York City.</p>
      <p>
        In my free time you can find me planning/daydreaming about traveling the
        world, concocting something delicious in the kitchen, knitting blankets
        modelled on abstract art, or making up drinking games to play watching
        Jeopardy!
      </p>
    </div>
  );
};

export default AboutMe;
