import React from "react";
import Navbar from "../components/navbar/Navbar";
import Button from "../components/landing/Button";
import Footer from "./Footer";

export default function Landing({toggleDarkMode, darkMode}) {
  // change sign up later to if a user is logged in delete it?
  //I will saparate login/signup btn - sky
  // - Tuser must be signed in for anything to occur (i.e product page load “maybe add )

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
            <h1 className="md:text-5xl text-4xl leading-[44px] md:leading-[60px] text-[#2d8630] font-bold">
              Australia's most awarded online Task Management platform
            </h1>
            <p className="font-bold text-[22px] md:text-2xl">
              Find your dream schedule with{" "}
              <span className="text-[#2d8630]">Task Flow</span>
            </p>
            <div className="flex items-center justify-center space-x-4">
              {/* Navigate our users to navbar to signup/login */}
            {/* <Signup /> */}
            <Button link="ProductPage" innerText="Go to Product" />
            </div>
          </div>
          <figure className="md:p-4">
            <img
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


      <Footer />

    </section>
  );
}
