import { useContext, useState } from "react";
import DarkMode from "../Ui/DarkMode";
import { Link } from "react-router-dom";
import { planner } from "../../assets";
import Login from "../modals/login/Login";
import Signup from "../modals/signup/Signup";
import HamBurgerMenu from "./HamBurgerMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav
      className={` duration-300 text-navBlack bg-navWhite dark:bg-navBlack dark:text-navWhite  fixed w-full z-30 top-0 start-0 `}
    >
      <div className="mx-auto max-w-screen-2xl p-4 flex flex-wrap items-center justify-between ">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Logo />
        </div>
        <HamBurgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
        <div className="hidden w-full md:flex md:items-center md:w-auto ml-auto space-x-4">
          <PricingPageLink />
          <Login />
          <Signup />
          <DarkMode />
        </div>
      </div>
    </nav>
  );
}

const PricingPageLink = () => {
  return (
    <Link to="/PricingPage">
      <button
        type="button"
        className="dark:text-navWhite rounded-lg bg-gray-200   /md:text-lg px-3 py-2  mr-5 duration-300  hover:bg-gray-300 hover:rounded-xl dark:hover:bg-grey-100 dark:bg-green-500  dark:hover:text-navBlack "
      >
        Pricing
      </button>
    </Link>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center flex-shrink-0 ">
      <Link to="/" className="flex items-center ">
        <img src={planner} className="h-8 w-8 m-2" alt="Logo" />
        <span className="text-lg text-[#2d8630]     text- sm:text-2xl md:text-3xl ml-2 font-bold whitespace-nowrap dark:text-navWhite">
          Daily Tasker
        </span>
      </Link>
    </div>
  );
};
