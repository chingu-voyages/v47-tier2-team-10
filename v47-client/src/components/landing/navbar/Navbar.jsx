import { useState, useCallback } from "react";
import HambergerMenu from "./HambergerMenu";
import LoginBtn from "./LoginBtn";
import DarkMode from "../../reusable/DarkMode";
import DashboardLink from "./DashboardLink";
import Logo from "./Logo";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamMenu = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  return (
    <nav
      className={`font-mono duration-300 text-navBlack bg-navWhite dark:bg-navBlack dark:text-navWhite  fixed w-full z-20 top-0 start-0 `}
    >
      <div className="mx-auto max-w-screen-2xl p-4 flex flex-wrap items-center justify-between ">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Logo />
        </div>
        <HambergerMenu toggleHamMenu={toggleHamMenu} isOpen={isOpen} />
        <div className="hidden w-full md:flex md:items-center md:w-auto ml-auto space-x-4">
          <DashboardLink />
          <LoginBtn />
          <DarkMode />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
