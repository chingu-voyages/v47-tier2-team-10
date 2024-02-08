import React, { useContext } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { darkModeContext } from "../../../context/DarkModeContext";

const HambergerMenu = ({ toggleHamMenu, isOpen }) => {
  const HamIcon = isOpen ? MdClose : MdMenu;

  const { darkMode, setDarkMode } = useContext(darkModeContext);

  return (
    <>
      <div className="md:hidden ml-auto">
        <button
          type="button"
          className={`text-white  bg-navGreen  font-medium rounded-lg text-xl sm:text-2xl px-4 py-2 transition duration-300 ease-in-out transform hover:scale-110`}
          onClick={toggleHamMenu}
        >
          {<HamIcon className="h-6 w-6" />}
        </button>
      </div>
      <div
        className={`absolute top-full left-0 w-full
          dark:bg-navBlack bg-navWhite shadow-lg
         ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <a
          href="/"
          className="block   text-xl px-3 py-2 border-b border-grey-800 text-center dark:border-navWhite"
          onClick={toggleHamMenu}
        >
          Go To Task Dashboard
        </a>
        <a
          href="/PricingPage"
          className="block   text-xl px-3 py-2 border-b border-grey-800 text-center dark:border-navWhite"
          onClick={toggleHamMenu}
        >
          Pricing
        </a>
        <button
          type="button"
          className="w-full  font-medium  text-xl px-4 py-2 border-b border-grey-800 dark:border-navWhite"
          onClick={toggleHamMenu}
        >
          Login/SignUp
        </button>
        <span
          onClick={() => setDarkMode(!darkMode)}
          className="block  text-xl px-3 py-2 text-center border-b border-grey-800 dark:border-navWhite"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </span>
      </div>
    </>
  );
};

export default HambergerMenu;
