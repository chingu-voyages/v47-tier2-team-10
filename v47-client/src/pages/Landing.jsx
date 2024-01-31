import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Button from "../components/landing/Button";
import Footer from "./Footer";
import Aos from "aos";
import PricingPage from "./PricingPage";
import Testimonials from "./Testimonials";

export default function Landing({ toggleDarkMode, darkMode }) {
  // change sign up later to if user is logged in delete it ?

  // - user must be signed in for anything to occur (i.e product page load “maybe add )

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section

      id="landing-section"
      className="bg-gradient-to-t  from-gray-100 to-gray-200"
    >
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div
        style={{ height: "calc(100vh - 80px)" }}
        className="mt-[80px] mx-auto p-8 flex justify-center items-center"
      >
        <div className="flex text-center flex-col max-w-[730px]  justify-center items-center space-y-8">
          <div className="space-y-6">
            <h1 data-aos="fade-right" data-aos-duration="1500" className="md:text-5xl text-4xl leading-[44px] md:leading-[60px] text-[#2d8630] font-bold">
              World's most awarded online Task Management platform
            </h1>
            <p data-aos="fade-up" data-aos-duration="1500" className="font-bold text-[22px] md:text-2xl">
              Find your dream schedule with{" "}
              <span className="text-[#2d8630]">Task Flow</span>
            </p>
            <div  data-aos="fade-up" data-aos-duration="1500">
              <Button link="ProductPage" innerText="Go to Product" />
            </div>
          </div>
          <figure className="md:p-4">
            <img
            data-aos="fade-in" data-aos-duration="3000"
              src="/assets/landing.svg"
              alt="Landing Icon"
              className="md:h-[500px] md:w-[700px]"
            />
          </figure>
        </div>
      </div>
      {/*
      maybe add a wave here
       <div
        className="w-full bg-no-repeat rotate-180  absolute -bottom-[120px] h-[300px]"
        style={{ backgroundImage: "url(/wave.svg)" }}
      ></div> */}
     <Testimonials />
      <Footer />
    </section>
  );
}
