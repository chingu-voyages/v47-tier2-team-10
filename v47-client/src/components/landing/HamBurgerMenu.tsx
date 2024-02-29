import { MdMenu, MdClose } from "react-icons/md";
import { useContext } from "react";
import { darkModeContext } from "../../context/DarkModeContext";
import { Link } from "react-router-dom";

interface HambergerMenuProps {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
}
interface NavButtonProps {
  innerText: string;
  onClickValue: () => void;
  isButton?: boolean;
  linkTo?: string;
}

export default function HamBurgerMenu(props: HambergerMenuProps) {
  const { isOpen, setIsOpen } = props;
  //   login and signup is not working still ???

  return (
    <>
      <HamBurgerMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      <HamBurgerContext isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

const HamBurgerContext = (props: HambergerMenuProps) => {
  const { isOpen, setIsOpen } = props;
  const { darkMode, setDarkMode } = useContext(darkModeContext);

  return (
    <div
      className={`absolute top-full left-0 w-full
          dark:bg-navBlack bg-navWhite shadow-lg
         ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <NavButton
        isButton={false}
        linkTo="/PricingPage"
        innerText="Pricing"
        onClickValue={() => setIsOpen(!isOpen)}
      />
      <NavButton
        innerText="login/signup"
        onClickValue={() => setIsOpen(!isOpen)}
      />
      <span
        onClick={() => {
          setIsOpen(!isOpen);
          setDarkMode(!darkMode);
        }}
        className="block  cursor-pointer text-xl px-3 py-2 text-center border-b border-grey-800 dark:border-navWhite"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </span>
    </div>
  );
};

const NavButton = (props: NavButtonProps) => {
  const { innerText, onClickValue, isButton, linkTo } = props;
  if (!isButton) {
    return (
      <Link
        to={linkTo ? linkTo : ""}
        className="block text-xl px-3 py-2 border-b border-grey-800 text-center dark:border-navWhite"
        onClick={onClickValue}
      >
        {innerText}
      </Link>
    );
  } else {
    return (
      <button
        type="button"
        className="w-full  font-medium  text-xl px-4 py-2 border-b border-grey-800 dark:border-navWhite"
        onClick={onClickValue}
      >
        {innerText}
      </button>
    );
  }
};

const HamBurgerMenuIcon = (props: HambergerMenuProps) => {
  const { isOpen, setIsOpen } = props;
  const HamIcon = isOpen ? MdClose : MdMenu;

  return (
    <div className="md:hidden ml-auto">
      <button
        type="button"
        className={`text-white  bg-navGreen  font-medium rounded-lg text-xl sm:text-2xl px-4 py-2 transition duration-300 ease-in-out transform hover:scale-110`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {<HamIcon className="h-6 w-6" />}
      </button>
    </div>
  );
};
