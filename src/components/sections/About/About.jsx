import React from 'react';
import Container from '../Container/Container';
import aboutLineImg from '@/assets/about/Line 5.png';
import aboutPhoneImg from '@/assets/about/Group70.png';
import { FiCheckCircle } from "react-icons/fi";

const About = () => {
  return (
    <>
      <Container>
        <div className='flex justify-center space-x-10'>
          {/* left area  */}
          <div className='w-[50%]'>
            <img src={aboutPhoneImg} alt="" />
          </div>

          {/* right area  */}
          <div className='w-[50%]'>
            <div className='w-[70%]'>
              <h2 className='text-[#FFF] font-manrope text-[47px] font-bold'>About Early Bird</h2>
              <p className='text-[#A5A39B] font-inter text-[18px] leading-[28.8px] mt-[20px]'>Early Bird allows you to quickly get crucial info on a token's launch. Simply enter the contract address for the token and Early Bird will relay all the launch information you require.</p>
              <img className='mt-[24px] mb-[24px]' src={aboutLineImg} alt="" />
              <div className='flex items-center space-x-[10px] mb-[16px]'>
                <div className='text-[#CDBB13]'><FiCheckCircle /></div>
                <div><p className='text-[#EAE8E1] font-manrope text-[20px] font-medium leading-[28px]'>Swift access to crucial information.</p></div>
              </div>
              <div className='flex items-center space-x-[10px] mb-[16px]'>
                <div className='text-[#CDBB13]'><FiCheckCircle /></div>
                <div><p className='text-[#EAE8E1] font-manrope text-[20px] font-medium leading-[28px]'>Faster than going through Etherscan.</p></div>
              </div>
              <div className='flex items-center space-x-[10px]'>
                <div className='text-[#CDBB13]'><FiCheckCircle /></div>
                <div><p className='text-[#EAE8E1] font-manrope text-[20px] font-medium leading-[28px]'>Clean layout for ease of access.</p></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;