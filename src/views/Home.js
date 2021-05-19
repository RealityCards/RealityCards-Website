import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Cta from '../components/sections/Cta';
import CtaDiscord from '../components/sections/CtaDiscord';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesSplit invertMobile imageFill />
      <CtaDiscord split />
      <FeaturesTiles />
      <Cta split />
    </>
  );
};

export default Home;
