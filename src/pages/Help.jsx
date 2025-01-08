import React from "react";
import HelpHeader from "../components/HelpHeader";
import FeaturedArticles from "../components/FeaturedArticles";
import ShopSection from "../components/ShopSection";
import HelpPoster from "../Shared/HelpPoster";
import useTitle from "../Hooks/title";

const Help = () => {
  useTitle("Help Center");
  return (
    <div className="container">
      <HelpHeader />
      <FeaturedArticles />
      <ShopSection />
      <HelpPoster />
    </div>
  );
};

export default Help;
