import { useEffect, useRef } from "react";
import videoBg from "@/assets/videos/Gold.mp4"
import Container from "../Container/Container";
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
import img from '@/assets/banner/group69.png'

const Banner = () => {
  const vidRef = useRef();

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.muted = false;
    }
  }, []);

  return (
    <div className="overflow-hidden relative" id="home">
      <div className="overflow-hidden w-full max-h-[70vh] md:max-h-[90dvh] flex justify-center items-center relative">
        {/* video */}
        <div className="w-full h-[80vh] md:h-dvh">
          <video
            className="w-full h-full object-fill md:object-cover"
            muted
            autoPlay
            loop
            src={videoBg}
          ></video>
        </div>

        <div className="absolute w-full h-full bg-[#151414] bg-opacity-40">
          <Container>
            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-5 mt-10 2xl:mt-32">
              <div className="bgDropShadow w-fit p-8">
                <h1 className="text-white text-[50px] md:text-[57px] lg:text-[75px] 2xl:text-[80px] font-manrope font-semibold">Early Bird</h1>
                <p className="text-[#BBB9AF] text-[21px] lg:text-[25px] 2xl:text-[32px] font-inter mb-5">Get the information you <br /> need, fast.</p>

                <Button className="text-[#151414] rounded-[8px] group cursor-pointer md:px-5">
                  <span className="flex justify-center items-center">
                    <p className='text-[16px] 2xl:text-[18px] font-inter'>Launch App</p>
                    <MdArrowOutward className='text-[18px] ml-2 group-hover:-mt-2 duration-300' />
                  </span>
                </Button>
              </div>

              {/* Image */}
              <img src={img} alt="Image" className="scale-110 md:scale-100 w-[255px] md:w-[320px] lg:w-[450px] xl:w-[500px] 2xl:w-[550px] md:-mr-14 lg:-mr-16 2xl:-mr-20" />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Banner;
