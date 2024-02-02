import React, { useState } from "react";
import {
  TbLayoutSidebarRightCollapse,
  TbLayoutSidebarLeftCollapse,
} from "react-icons/tb";
import { RiAddFill } from "react-icons/ri";
import Category from "./Category";
import AddNewCategory from "../../productpage/modals/AddNewCategory"; // Import AddNewCategory component

export default function LeftNav({
  isLeftNavOpen,
  setIsLeftNavOpen,
  productData,
  handleFilterData,
  isLoading,
  setIsAddModalOpen,
  isAddModalOpen,
  setProductData,
}) {
  const categoryEl = productData.map((category, index) => (
    <Category
      setProductData={setProductData}
      handleFilterData={handleFilterData}
      setIsLeftNavOpen={setIsLeftNavOpen}
      key={index}
      category={category}
    />
  ));

  return (
    <>
      <section
        className={`md:w-72 dark:bg-[#2B2C37] flex bg-gray-200 p-7 font-medium md:p-0 rounded-lg md:rounded-none md:duration-700  font-gray-900 z-10 overflow-auto [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-slate-700
        dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 ${
          isLeftNavOpen
            ? "absolute right-16 top-40 md:static"
            : "md:-ml-80 hidden md:block"
        }`}
      >
        <div className="md:w-full md:flex md:flex-col text-black md:px-5">
          <button
            onClick={() => setIsLeftNavOpen((prev) => !prev)}
            className="hidden dark:text-gray-200 text-3xl md:flex ml-auto mt-6 mb-2 hover:text-gray-700"
          >
            <TbLayoutSidebarLeftCollapse />
          </button>
          <div className="flex flex-col mb-4">
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
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="mt-auto mb-7 md:flex dark:text-gray-200 justify-center items-center gap-2 hidden rounded-lg p-2 ease-in duration-300 hover:bg-gray-100"
          >
            <RiAddFill />
            <p className="font-bold text-gray-800 dark:text-white ">Add new category</p>
          </button>
        </div>
      </section>

      {!isLeftNavOpen && (
        <button
          onClick={() => setIsLeftNavOpen((prev) => !prev)}
          className="mb-auto ml-1 mt-6 hidden md:block text-3xl hover:text-gray-700"
        >
          <TbLayoutSidebarRightCollapse />
        </button>
      )}

      {isAddModalOpen && (
        <AddNewCategory onClose={() => setIsAddModalOpen(false)} />
      )}
    </>
  );
}
