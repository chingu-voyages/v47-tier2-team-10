import React from "react";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import Category from "./Category";
import { IoIosAddCircle } from "react-icons/io";

export default function LeftNav({
  isLeftNavOpen,
  setIsLeftNavOpen,
  productData,
  handleFilterData,
  isLoading,
}) {
  const categoryEl = productData.map((category, index) => (
    <Category
      handleFilterData={handleFilterData}
      key={index}
      category={category}
    />
  ));

  return (
    // <section className='border w-[300px] p-6'>LeftNav</section>
    <>
      <section
        className={`md:w-64 flex bg-gray-200 p-7 md:p-0 rounded-lg md:rounded-none md:duration-700 font-medium font-gray-900 ${
          isLeftNavOpen
            ? "absolute right-16 top-20 md:static"
            : "md:-ml-72 hidden md:block"
        } `}
      >
        <div className="md:w-full md:flex md:flex-col  text-black md:px-5">
          <button
            onClick={() => setIsLeftNavOpen((prev) => !prev)}
            className="hidden text-3xl md:flex ml-auto mt-6 mb-2 hover:text-gray-700"
          >
            <TbLayoutSidebarLeftCollapse />
          </button>
          <div className="flex flex-col">
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
          <button className="mt-auto mb-7 md:flex justify-center items-center gap-2 hidden hover:text-gray-700">
            <IoIosAddCircle />
            <p className="hover:text-gray-700">Add new activity</p>
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
    </>
  );
}
