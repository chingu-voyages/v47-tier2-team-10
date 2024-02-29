import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useContext } from "react";
import { darkModeContext } from "../../context/DarkModeContext";

interface Props {
  isProductPageDarkMode?: boolean;
}

const DarkMode = (props: Props) => {
  const { isProductPageDarkMode } = props;
  const { darkMode, setDarkMode } = useContext(darkModeContext);
  const ModeIcon = darkMode ? MdLightMode : MdDarkMode;
  return (
    <div
      className={` ${
        isProductPageDarkMode ? "" : "hidden"
      } md:flex items-center text-white text-2xl sm:text-3xl`}
    >
      <ModeIcon
        className="cursor-pointer text-yellow-500 transition duration-300 ease-in-out transform hover:scale-125"
        onClick={() => setDarkMode(!darkMode)}
      />
    </div>
  );
};

export default DarkMode;
