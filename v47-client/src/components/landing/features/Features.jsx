import React, { useEffect } from "react";
import Icons from "./Icons";
import Stats from "./Stats";
import Aos from "aos";

export default function Features() {
  useEffect(() => {
    Aos.init();
  }, []);
 
  return (
    <div
      className="min-h-screen flex justify-center items-center flex-col"
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <div className="mx-auto max-w-2xl  text-center mt-10">
        <h2 className="text-3xl lg:text-4xl text-[#2d8630] font-bold dark:text-gray-200">
          Our Features
        </h2>
        <p className="mt-3 text-gray-800 dark:text-gray-200 text-[16px]">
          The powerful and flexible organisation solution for every individual
          and business.
        </p>
      </div>
      <Icons />
      <Stats />
    </div>
  );
}
