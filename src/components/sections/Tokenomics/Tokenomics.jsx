import circleImg from '@/assets/tokenomics/Group 29.png';
import Container from '../Container/Container';
import CountUp from 'react-countup';

const Tokenomics = () => {
  return (
    <div className='my-20 xl:my-36' id='tokenomics'>
      <Container>
        <div className='bg-gradient-to-r from-[#201B15] to-[#1B1915] border border-[#28221E] rounded-[20px] px-20 xl:px-24 py-14 xl:py-16'>
          {/*  token title   */}
          <div>
            <h2 className='text-[#EAE8E1] text-center font-manrope text-[47px] font-bold mb-[13px]'>Tokenomics</h2>
            <p className='text-[#A5A39B] text-center font-inter text-[17px] 2xl:text-[18px] w-[72%] mx-auto'>Tokenomics involves designing incentives and mechanisms to govern the distribution and use of digital tokens within a system.</p>
          </div>

          {/* Card content area */}
          <div className='mt-[60px] flex items-center'>
            {/* Circle */}
            <div className='md:w-1/2'>
              <img src={circleImg} alt="Image" className='w-[390px]' />
            </div>

            {/* Counter  */}
            <div className='md:w-1/2'>
              {/* Total supply */}
              <div className='bg-[#22201a] px-4 py-3 rounded-[10px]'>
                <div className='flex items-center relative mb-3'>
                  <div className='w-4 h-4 bg-[#FFCC4C] rounded-full' />
                  <span class="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-[#FFCC4C] opacity-45 -ml-[2px]" />
                  <p className='text-[#A5A39B] font-inter ml-2'>Total Supply</p>
                </div>
                <p className='text-[#EAE8E1] text-[30px] font-semibold font-manrope'>1,000,000,000</p>
              </div>

              {/* Circulating supply */}
              <div className='bg-[#22201a] px-4 py-3 rounded-[10px] my-5'>
                <div className='flex items-center relative mb-3'>
                  <div className='w-4 h-4 bg-[#FB3C94] rounded-full' />
                  <span class="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-[#FB3C94] opacity-45 -ml-[2px]" />
                  <p className='text-[#A5A39B] font-inter ml-2'>Circulating supply</p>
                </div>
                <p className='text-[#EAE8E1] text-[30px] font-semibold font-manrope'>700,000,000</p>
              </div>

              {/* Development */}
              <div className='bg-[#22201a] px-4 py-3 rounded-[10px] my-5'>
                <div className='flex items-center relative mb-3'>
                  <div className='w-4 h-4 bg-[#AD2ADD] rounded-full' />
                  <span class="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-[#AD2ADD] opacity-45 -ml-[2px]" />
                  <p className='text-[#A5A39B] font-inter ml-2'>Development, marketing & team fees</p>
                </div>
                <p className='text-[#EAE8E1] text-[30px] font-semibold font-manrope'>
                  <CountUp
                    start={0}
                    end={5}
                    duration={5}
                    separator=" "
                    prefix="0"
                    suffix="%"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tokenomics;