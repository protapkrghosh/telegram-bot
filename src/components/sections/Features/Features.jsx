import React from 'react';
import Container from '../Container/Container';
import featuresIcon1 from '@/assets/features/Group64.png';
import featuresIcon2 from '@/assets/features/Group65.png';
import featuresIcon3 from '@/assets/features/Group66.png';

const Features = () => {
  return (
    <>
      <Container>
        <div>
          {/* title part  */}
          <h2 className='mb-[60px] text-[#EAE8E1] font-manrope text-[47px] font-bold leading-[54.05px]'>Key Features </h2>
          {/* card section  */}
          <div className='grid grid-cols-3 gap-[30px]'>
            <div className='px-[30px] pt-[30px] border-2 border-[#201B15] rounded-[30px]'>
              <img className='mb-[30px]' src={featuresIcon1} alt="" />
              <p className='mb-[16px] text-[#EAE8E1] font-manrope text-[26px] font-bold leading-[36.4px]'>Block analysis</p>
              <p className='mb-[30px] text-[#A5A39B] font-inter leading-[25.6px]'>Was the launch bundled? Who was first? How much did they bribe?</p>
            </div>
            <div className='px-[30px] pt-[30px] border-2 border-[#201B15] rounded-[30px]'>
              <img className='mb-[30px]' src={featuresIcon2} alt="" />
              <p className='mb-[16px] text-[#EAE8E1] font-manrope text-[26px] font-bold leading-[36.4px]'>Tax inspector</p>
              <p className='mb-[30px] text-[#A5A39B] font-inter leading-[25.6px]'>Did the launch have tax? How much money did the tax wallet receive?</p>
            </div>
            <div className='px-[30px] pt-[30px] border-2 border-[#201B15] rounded-[30px]'>
              <img className='mb-[30px]' src={featuresIcon3} alt="" />
              <p className='mb-[16px] text-[#EAE8E1] font-manrope text-[26px] font-bold leading-[36.4px]'>Insider tracker</p>
              <p className='mb-[30px] text-[#A5A39B] font-inter leading-[25.6px]'>Enter a list of addresses to cross reference tokens they all bought.</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Features;