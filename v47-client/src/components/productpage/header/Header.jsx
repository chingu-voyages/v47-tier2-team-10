import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import DarkMode from "../../navbar/DarkMode";
import Weather from "../../../pages/weather/Weather";

export default function Header({
  isLeftNavOpen,
  setIsLeftNavOpen,
  filteredData,
  darkMode,
  toggleDarkMode,
  isLoading,
}) {

  // https://konradstaniszewski.com/blog/tailwind-hamburger
  const genericHamburgerLine = `h-1 w-6 ${isLeftNavOpen ? 'my-1' : 'my-0.5'} rounded-full bg-black transition ease transform duration-300`;


  /*
    TODO:
    - change header to color below for some reason duration doesnt get applied to gradients,
      Need to research whats wrong
    - Maybe set default template to something so we can not see the nothing selected since its quite
    ugly 

    Code Used:
    -  duration-300  dark:bg-gradient-to-t   from-gray-800 to-black  bg-gray-200 
  */

  return (
    <section className="border  duration-700  dark:bg-[#2B2C37]  bg-gray-200  rounded-md  p-6 flex justify-between items-center">
      <div className="flex items-center gap-x-4">
        <DarkMode
          isProductPageDarkMode={true}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        {isLoading ? (
          <div className="bg-gray-400 animate-pulse h-8 text-lg w-32"></div>
        ) : (
          <p className="font-bold text-lg dark:text-gray-200">
            {filteredData[0]?.activityName
              ? filteredData[0].activityName
              : "Nothing Selected"}
          </p>
        )}
        <Weather className="p-6 flex "/>
      </div>

      {/* hamburger */}
      <button
        className="flex flex-col h-12 w-12 justify-center items-center group md:hidden"
        onClick={() => setIsLeftNavOpen(prev => !prev)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isLeftNavOpen
              ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isLeftNavOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isLeftNavOpen
              ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>

    </section>
  );
}
