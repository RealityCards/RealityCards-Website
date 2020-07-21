import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonials from "../components/sections/Testimonials";
import Cta from "../components/sections/Cta";
import CtaDiscord from "../components/sections/CtaDiscord";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesSplit invertMobile imageFill />
      <CtaDiscord split />
      <FeaturesTiles />
      <Testimonials topDivider />
      <Cta split />
    </>
  );
};

export default Home;
