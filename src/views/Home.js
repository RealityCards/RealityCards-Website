import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import CtaDiscord from "../components/sections/CtaDiscord";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesSplit invertMobile imageFill />
      <CtaDiscord split />
      <FeaturesTiles />
      <Testimonial topDivider />
      {/* <Cta split /> */}
    </>
  );
};

export default Home;
