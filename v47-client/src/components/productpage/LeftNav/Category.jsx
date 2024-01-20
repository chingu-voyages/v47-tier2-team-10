import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import Activity from "./Activity";
import { GrAddCircle } from "react-icons/gr";

export default function Category({ category, handleFilterData}) {
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

      <div className="flex justify-between items-center gap-1 mt-3 md:mt-5">
        <div className="flex gap-1  md:hover:text-gray-700 font-medium">
          <div className="hidden md:block hover:text-gray-700 font-medium text-lg">
            <button onClick={() => setIsActivityVisible((prev) => !prev)}>
              {isActivityVisible ? <MdExpandLess /> : <MdExpandMore />}
            </button>
          </div>
          <button
            onClick={() => setIsActivityVisible((prev) => !prev)}
            className="flex justify-center items-center gap-2"
          >
            <div className="text-gray-400 md:text-gray-900 md:hover:text-gray-700">
              {capitalizeEachWord(category.categoryName)}
            </div>
          </button>
        </div>
        <div className='flex gap-1'>
          <button className='hidden md:block font-bold text-xl text-gray-900 hover:text-gray-700'>
            <GrAddCircle />
          </button>
          <button className="hidden md:block font-bold text-xl text-red-500 hover:text-red-400">
            <MdDeleteOutline />
          </button>
        </div>
      </div>


      <div className={`${isActivityVisible ? 'block' : 'block md:hidden'}`}>
        {activityEl}
      </div>
    </>
  );
}
