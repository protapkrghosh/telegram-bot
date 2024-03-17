import React from 'react';
import Container from '../Container/Container';
import aboutLineImg from '@/assets/about/Line 5.png';

const About = () => {
  return (
    <>
      <Container>
        <div>
          <div></div>
          <div>
            <h2 className='text-[#FFF] font-manrope text-[47px] font-bold'>About Early Bird</h2>
            <p className='text-[#A5A39B] font-inter text-[18px] leading-[28.8px] mt-[20px]'>Early Bird allows you to quickly get crucial info on a token's launch. Simply enter the contract address for the token and Early Bird will relay all the launch information you require.</p>
            <img className='mt-[24px] mb-[24px]' src={aboutLineImg} alt="" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;