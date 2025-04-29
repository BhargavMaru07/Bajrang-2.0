import React from "react";
import OurValue from "../components/OurValue";
import WhatWeDo from "../components/WhatWeDo";
import InstaLink from "../components/InstagramSection";
import AboutLatkan from "../components/AboutLatkan";
import Team from "../components/AboutTeam";
import useTitle from "../Hooks/title";

const About = () => {
  useTitle("About us");
  return (
    <>
      <AboutLatkan />
      <OurValue />
      <WhatWeDo />
      {/* <Team /> */}
      <InstaLink />
    </>
  );
};

export default About;
