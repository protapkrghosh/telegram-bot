import { useEffect, useRef } from "react";


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
        src='https://res.cloudinary.com/dycfvsiex/video/upload/v1711101136/aukpsdyixdeshcndipb8.mp4'
      // src={videoBg}
      ></video>
    </div>
  );
};

export default Banner;