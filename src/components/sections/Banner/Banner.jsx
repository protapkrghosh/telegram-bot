import { useEffect, useRef } from "react";
import videoBg from "@/assets/videos/Gold.mp4"
import Container from "../Container/Container";
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";


const Banner = () => {
  const vidRef = useRef();

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.muted = false;
    }
  }, []);

  return (
    <div className="heroBg overflow-hidden relative">
      <div className="overflow-hidden w-full max-h-[70vh] md:max-h-[90dvh] flex justify-center items-center relative">
        {/* video */}
        <div className="w-full h-[80vh] md:h-dvh -mt-[100px]">
          <video
            className="w-full h-full object-fill md:object-cover"
            muted
            autoPlay
            loop
            src={videoBg}
          ></video>
        </div>

        <div className="absolute w-full h-full">
          <Container>
            <div className="flex justify-between items-center">
              <div className="bgDropShadow w-fit p-8">
                <h1 className="text-white text-[75px] 2xl:text-[80px] font-manrope font-semibold">Early Bird</h1>
                <p className="text-[#BBB9AF] text-[25px] 2xl:text-[32px] font-inter mb-5">Get the information you <br /> need, fast.</p>

                <Button className="text-[#151414] rounded-[8px] group cursor-pointer px-5">
                  <span className="flex justify-center items-center">
                    <p className='text-[16px] 2xl:text-[18px] font-inter'>Launch App</p>
                    <MdArrowOutward className='text-[18px] ml-2 group-hover:-mt-2 duration-300' />
                  </span>
                </Button>
              </div>

{/* Image */}
{/* <img src={} alt="" /> */}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Banner;
