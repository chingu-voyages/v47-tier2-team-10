import React, { useContext } from "react";
import DarkMode from "../../reusable/DarkMode";
import Weather from "../weather/Weather";
import { filteredDataContext } from "../../../context/FilteredDataContext";
import { isLoadingContext } from "../../../context/IsLoadingContext";

export default function Header({ isLeftNavOpen, setIsLeftNavOpen }) {
  const { filteredData } = useContext(filteredDataContext);
  const { isLoading } = useContext(isLoadingContext);

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
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-1 w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-gray-800 dark:border-gray-700">
      <nav className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8">

        {/* hamburger */}
        <div className="me-5 lg:me-0">
          <button
            className="lg:hidden mt-2"
            onClick={() => setIsLeftNavOpen(prev => !prev)}
          >
            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          </button>
        </div>

        {/* activity */}
        <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
          <div className="py-2 px-4  block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
          {isLoading ? (
            <div className="bg-gray-400 animate-pulse h-8 text-lg w-32"></div>
          ) : (
            <p className={`text-xl font-semibold dark:text-white transform duration-700 ${isLeftNavOpen ? 'pl-56 lg:pl-0 ' : ''}`}>
              {filteredData[0]?.activityName
                ? filteredData[0].activityName
                : "Nothing Selected"}
            </p>
          )}    
          </div>

          {/* weather and darkmode  */}
          <div className="flex flex-row items-center justify-end gap-2">
            <button type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              <Weather/>
            </button>
            <button type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            <DarkMode
              isProductPageDarkMode={true}
            />
          </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
