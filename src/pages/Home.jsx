import React from "react";
import HeroSection from "../components/HeroSection";
import LatestArrival from "../components/LatestArrival";
import Poster from "../components/Poster";
import Popular from "../components/Popular";
import AboutTeam from "../components/AboutTeam";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LatestArrival />
      <Banner />
      <Popular />
      <Poster />
      <AboutTeam />
    </>
  );
};

export default Home;
