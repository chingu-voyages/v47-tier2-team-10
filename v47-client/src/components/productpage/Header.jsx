import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import DarkMode from "../navbar/DarkMode";

export default function Header({
  isLeftNavOpen,
  setIsLeftNavOpen,
  filteredData,
  darkMode,
  toggleDarkMode,
  isLoading,
}) {
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
      </div>

      <button
        onClick={() => setIsLeftNavOpen((prev) => !prev)}
        className="mb-auto  md:hidden text-3xl dark:text-gray-200"
      >
        {!isLeftNavOpen && <GiHamburgerMenu />}
        {isLeftNavOpen && <IoClose />}
      </button>
    </section>
  );
}
