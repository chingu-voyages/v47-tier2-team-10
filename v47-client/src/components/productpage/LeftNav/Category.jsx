import React, { useState } from "react";
import { TbCategoryPlus } from "react-icons/tb";
import { TbCategoryMinus } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import Activity from "./Activity";
import { TbCategory } from "react-icons/tb";

export default function Category({ category, handleFilterData }) {
  const [isActivityVisible, setIsActivityVisible] = useState(false);

  const activityEl = category.activityTypes.map((activity, index) => (
    <Activity
      handleFilterData={handleFilterData}
      key={index}
      activity={activity}
    />
  ));

  const capitalizeEachWord = (sentence) => {
    const sentenceArr = sentence.toLowerCase().split(" ");
    return sentenceArr
      .map((word) => word[0].toUpperCase() + word.substr(1))
      .join(" ");
  };

  return (
    <>
      <div className="flex justify-between items-center gap-1 md:mt-3 mb-1">
        <div className="flex gap-1  hover:text-gray-700 font-medium">
          <div className="hidden md:block hover:text-gray-700 font-medium text-lg">
            <button onClick={() => setIsActivityVisible((prev) => !prev)}>
              {isActivityVisible ? <TbCategoryMinus /> : <TbCategoryPlus />}
            </button>
          </div>
          <button
            onClick={() => setIsActivityVisible((prev) => !prev)}
            className="flex justify-center items-center gap-2 "
          >
            <div className="md:hidden">
              <TbCategory />
            </div>
            <div className="hover:text-gray-700">
              {capitalizeEachWord(category.categoryName)}
            </div>
          </button>
        </div>
        <button className="hidden md:block font-bold text-xl text-red-500 hover:text-red-400">
          <MdDeleteOutline />
        </button>
      </div>

      {isActivityVisible && <div>{activityEl}</div>}
    </>
  );
}