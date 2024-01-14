import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  // change sign up later to if user is logged in delete it ?
  return (
    <section
      id="landing-section"
      className="bg-gradient-to-t from-gray-100 to-gray-200"
    >
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex text-center flex-col max-w-[730px]  justify-center items-center space-y-8">
          <div className="space-y-6">
            <h1 className="md:text-5xl text-4xl leading-[44px] md:leading-[60px] text-[#2d8630] font-bold">
              Australia's most awarded online Task Management platform
            </h1>
            <p className="font-bold text-[22px] md:text-2xl">
              Find your dream schedule with{" "}
              <span className="text-[#2d8630]">Task Flow</span>
            </p>
            <div>
              <button
                className="bg-green-600 mr-4 hover:opacity-70 duration-300 text-white py-2 px-4 rounded-md"
                onClick={() => navigate("/SignUp")}
              >
                Sign Up
              </button>
              <button
                onClick={() => navigate("/ProductPage")}
                className="bg-green-600 hover:opacity-70 duration-300 text-white py-2 px-4 rounded-md"
              >
                Go to Product
              </button>
            </div>
          </div>

          <figure className="md:p-4">
            <img
              src="/landing.svg"
              alt="Landing Icon"
              className="md:h-[500px] md:w-[700px]"
            />
          </figure>
        </div>
      </div>
      {/* <div
        className="w-full bg-no-repeat rotate-180  absolute -bottom-[120px] h-[300px]"
        style={{ backgroundImage: "url(/wave.svg)" }}
      ></div> */}
    </section>
  );
}
