import { useState, useCallback } from "react";
import HambergerMenu from "./HambergerMenu";
import LoginBtn from "./LoginBtn";
import DarkMode from "./DarkMode";

const Nav = ({darkMode, toggleDarkMode}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamMenu = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);



  const DashboardLink = () => {
    return (
      <button
        type="button"
        className=" dark:text-navWhite text-lg md:text-lg px-3 py-3 mr-20  hover:bg-gray-100 hover:rounded-xl dark:hover:bg-grey-100 dark:hover:text-navBlack "
      >
        Task Dashboard
      </button>
    );
  };

  const Logo = () => {
    return (
      <div className="flex items-center flex-shrink-0 ">
        <a href="/" className="flex items-center ">
          <img src="/assets/planner.png "className="h-8 w-8 m-2" alt="Logo" />
          <span className="text-xl  sm:text-navBlack sm:text-2xl md:text-3xl ml-2 font-bold whitespace-nowrap dark:text-navWhite">
            Daily Tasker
          </span>
        </a>
      </div>
    );
  };

  return (
    <nav
      className={`font-mono text-navBlack bg-navWhite dark:bg-navBlack dark:text-navWhite  fixed w-full z-20 top-0 start-0 `}
    >
      <div className="mx-auto max-w-screen-2xl p-4 flex flex-wrap items-center justify-between ">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Logo />
        </div>

        <HambergerMenu
          toggleHamMenu={toggleHamMenu}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          isOpen={isOpen}
        />

        <div className="hidden w-full md:flex md:items-center md:w-auto ml-auto space-x-4">
          <DashboardLink />
          <LoginBtn />
          <DarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
