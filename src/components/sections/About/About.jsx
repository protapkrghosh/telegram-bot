import React from 'react';
import Container from '../Container/Container';
import aboutLineImg from '@/assets/about/Line 5.png';
import aboutPhoneImg from '@/assets/about/Group70.png';
import { FiCheckCircle } from "react-icons/fi";

const About = () => {
  return (
    <div id='about'>
      <Container>
        <div className='md:flex-none lg:flex xl:flex 2xl:flex justify-center items-center space-x-6'>
          {/* left area  */}
          <div className='w-[90%] md:w-[75%] relative'>
            <div className='z-40 relative' data-aos="fade-up" data-aos-duration="2500">
              <img src={aboutPhoneImg} alt="" />
            </div>
            <div className='lg:h-[150px] xl:h-[268px] lg:w-[150px] xl:w-[268px] bg-[#EA971C] blur-[242px] rounded-[268px] absolute top-60 left-44' />
          </div>

          {/*  right area  */}
          <div className='w-[100%] md:w-[75%]'>
            <div className='w-[70%] md:w-[85%]'>
              <h2 className='text-[#FFF] font-manrope text-[47px] font-bold' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">About Early Bird</h2>
              <p className='text-[#A5A39B] font-inter text-[18px] leading-[28.8px] mt-[20px]' data-aos="fade-up"
                data-aos-duration="2000">Early Bird allows you to quickly get crucial info on a token's launch. Simply enter the contract address for the token and Early Bird will relay all the launch information you require.</p>
              <img className='mt-[24px] mb-[24px]' src={aboutLineImg} alt="" />
              <div className='flex items-center space-x-[10px] mb-[16px]' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <div className='text-[#CDBB13]'><FiCheckCircle /></div>
                <div><p className='text-[#EAE8E1] font-manrope text-[20px] font-medium leading-[28px]'>Swift access to crucial information.</p></div>
              </div>
              <div className='flex items-center space-x-[10px] mb-[16px]' data-aos="fade-up"
                data-aos-duration="2000">
                <div className='text-[#CDBB13]'><FiCheckCircle /></div>
                <div><p className='text-[#EAE8E1] font-manrope text-[20px] font-medium leading-[28px]'>Faster than going through Etherscan.</p></div>
              </div>
              <div className='flex items-center space-x-[10px]' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <div className='text-[#CDBB13]'><FiCheckCircle /></div>
                <div><p className='text-[#EAE8E1] font-manrope text-[20px] font-medium leading-[28px]' >Clean layout for ease of access.</p></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;