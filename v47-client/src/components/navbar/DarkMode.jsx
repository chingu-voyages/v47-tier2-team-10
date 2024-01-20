import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useEffect } from "react";

const DarkMode = ({ toggleDarkMode, darkMode, isProductPageDarkMode }) => {
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const ModeIcon = darkMode ? MdDarkMode : MdLightMode;

  return (
    <div className={` ${isProductPageDarkMode ? "" : "hidden"} md:flex items-center text-white text-2xl sm:text-3xl`}>
      <ModeIcon
        className="cursor-pointer text-yellow-500 transition duration-300 ease-in-out transform hover:scale-125"
        onClick={toggleDarkMode}
      />
    </div>
  );
};

export default DarkMode;
