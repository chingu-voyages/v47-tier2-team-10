import React, { useContext } from "react";
import DarkMode from "../Ui/DarkMode";
import Weather from "./Weather";
import { filteredDataContext } from "../../context/FilteredDataContext";
import { isLoadingContext } from "../../context/IsLoadingContext";
import Login from "../modals/login/Login";
import { ActivityTypes } from "../../types/typings";
import { WEATHER_CLOUD_ICON } from "../../utils/constants";

interface Props {
  setIsLeftNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLeftNavOpen: boolean;
}

export default function Header(props: Props) {
  const { setIsLeftNavOpen } = props;
  const { filteredData } = useContext(filteredDataContext);
  const { isLoading } = useContext(isLoadingContext);

  return (
    <header className="sticky duration-300  top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-1 w-full bg-white z-20 border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-gray-800 dark:border-gray-700">
      <nav className="flex duration-300  basis-full items-center w-full mx-auto px-5 ">
        <HamburgerMenu setIsLeftNavOpen={setIsLeftNavOpen} />

        <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
          <div className="py-2 px-4  block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   dark:text-gray-400 dark:focus:ring-gray-600">
            {isLoading ? (
              <LoadingTitle />
            ) : (
              <CurrentTitleFiltered filteredData={filteredData} />
            )}
          </div>
          <RightContent />
        </div>
      </nav>
    </header>
  );
}

const CurrentTitleFiltered = (props: { filteredData: ActivityTypes[] }) => {
  const { filteredData } = props;
  return (
    <p
      className={`text-xl font-semibold dark:text-white transform duration-700 lg:pl-3`}
    >
      {filteredData[0]?.activityName
        ? filteredData[0].activityName
        : "Nothing Selected"}
    </p>
  );
};

const RightContent = () => {
  return (
    <div className="flex flex-row items-center justify-end gap-2">
      <Login />
      <div className="w-[2] h-[2rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:text-white ">
        <WeatherIcon />
        <Weather />
      </div>

      <button
        type="button"
        className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        <DarkMode isProductPageDarkMode={true} />
      </button>
    </div>
  );
};

const LoadingTitle = () => {
  return (
    <div className="bg-gray-400 animate-pulse h-8 text-lg w-32 lg:ml-3"></div>
  );
};

const HamburgerMenu = (props: {
  setIsLeftNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="me-5 lg:me-0">
      <button
        className="lg:hidden mt-2 dark:text-gray-400"
        onClick={() => props.setIsLeftNavOpen((prev: boolean) => !prev)}
      >
        <svg
          className="flex-shrink-0 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" x2="21" y1="6" y2="6" />
          <line x1="3" x2="21" y1="12" y2="12" />
          <line x1="3" x2="21" y1="18" y2="18" />
        </svg>
      </button>
    </div>
  );
};

const WeatherIcon = () => {
  return (
    <img src={WEATHER_CLOUD_ICON} alt="Weather Icon" className="w-8 h-8" />
  );
};
