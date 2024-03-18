import React from 'react';
import Container from '../Container/Container';
import featuresIcon1 from '@/assets/features/Group64.png';

const Features = () => {
  return (
    <>
      <Container>
        <div>
          {/* title part  */}
          <h2 className='mb-[60px] text-[#EAE8E1] font-manrope text-[47px] font-bold leading-[54.05px]'>Key Features </h2>
          {/* card section  */}
          <div>
            <div>
              <img className='mb-[30px]' src={featuresIcon1} alt="" />
              <p className='mb-[16px] text-[#EAE8E1] font-manrope text-[26px] font-bold leading-[36.4px]'>Block analysis</p>
              <p className='mb-[30px] text-[#A5A39B] font-inter leading-[25.6px]'>Was the launch bundled? Who was first? How much did they bribe?</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Features;