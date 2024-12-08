import React from "react";
import AboutPart1 from "../components/AboutPart1";
import AboutPart2 from "../components/AboutPart2";
import InstaLink from "../components/InstaLink";
import AboutLatkan from "../components/AboutLatkan";
import Team from "../components/AboutTeam";

const About = () => {
  return (
    <>
      <AboutLatkan />
      <AboutPart1 />
      <AboutPart2 />
      <Team />
      <InstaLink />
    </>
  );
};

export default About;
