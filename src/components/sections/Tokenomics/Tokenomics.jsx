import circleImg from '@/assets/tokenomics/Group 29.png';
import Container from '../Container/Container';

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
          <div className='mt-[60px]'>
            {/* Circle */}
            <div>
              <img src={circleImg} alt="Image" className='w-[390px]' />
            </div>

            {/* Counter  */}
            <div>

            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tokenomics;