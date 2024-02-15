import React, { useContext, useState } from "react";
import { RiAddFill } from "react-icons/ri";
import Category from "./Category";
import AddNewCategory from "../modals/add/AddNewCategory"; // Import AddNewCategory component
import { isLoadingContext } from "../../../context/IsLoadingContext";
import { productDataContext } from "../../../context/ProductDataContext";

export default function LeftNav({ isLeftNavOpen, setIsLeftNavOpen }) {
  const [isAddNewCategoryModalOpen, setIsNewCategoryModalOpen] =
    useState(false);

  const { isLoading } = useContext(isLoadingContext);
  const { productData } = useContext(productDataContext);

  const categoryEl = productData.map((category, index) => (
    <Category
      setIsLeftNavOpen={setIsLeftNavOpen}
      key={index}
      category={category}
    />
  ));

  const handleAddNewCategoryClick = () => {
    setIsNewCategoryModalOpen(true);
    setIsLeftNavOpen(false);
  };

  return (
    <>
      <div
        id="application-sidebar"
        className={`${
          isLeftNavOpen ? "translate-x-0 " : "lg:ml-0 -ml-24"
        } z-20 -translate-x-full transition-all duration-700 transform fixed top-0 start-0 bottom-0  w-72 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700`}
      >
        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Home
              </a>
            </li>
            {isLoading
              ? new Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="my-2 w-full bg-gray-400 animate-pulse h-10"
                    ></div>
                  ))
              : categoryEl}
          </ul>
        </nav>

        <div className="flex justify-center items-center">
          <button
            type="button"
            className="mt-auto mb-7 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-gray-800/30 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            onClick={handleAddNewCategoryClick}
          >
            <RiAddFill />
            Add new category
          </button>
        </div>
      </div>

      {isAddNewCategoryModalOpen && (
        <AddNewCategory setIsNewCategoryModalOpen={setIsNewCategoryModalOpen} />
      )}
    </>
  );
}
