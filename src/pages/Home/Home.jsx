import React from 'react';
import About from '@/components/sections/About/About';
import Banner from '@/components/sections/Banner/Banner';
import Features from '@/components/sections/Features/Features';
import Tokenomics from '@/components/sections/Tokenomics/Tokenomics';

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Features />
      <Tokenomics />
    </>
  );
};

export default Home;
