import { useEffect, useRef } from "react";
import banner from '@/assets/videos/recordVideo.mp4'

const Banner = () => {

  const vidRef = useRef();

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.muted = false;
    }
  }, []);


  return (
    <div>
      <video
        className="w-fix h-[100vh]"
        muted
        autoPlay
        loop
        // src='https://res.cloudinary.com/dycfvsiex/video/upload/v1711101136/aukpsdyixdeshcndipb8.mp4'
        src={banner}
      ></video>
    </div>
  );
};

export default Banner;