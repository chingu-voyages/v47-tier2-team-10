import React, { useState } from "react";
import { MdExpandMore, MdDeleteOutline } from "react-icons/md";
import Activity from "./Activity";
import { GrAddCircle } from "react-icons/gr";
import Add from "../modals/Add";
import Delete from "../modals/Delete"; 

export default function Category({ category, handleFilterData }) {
  const [isActivityVisible, setIsActivityVisible] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); 



  const handleDelete = () => {
    // we can add logic for deletion
    setIsDeleteModalOpen(false);
  };

  const handleCancel = () => {
    setIsDeleteModalOpen(false);
  };

  
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
        <div className="flex gap-1 font-medium">
          <div className="hidden md:block font-medium text-lg">
            <button onClick={() => setIsActivityVisible((prev) => !prev)}>
              <MdExpandMore
                className={`${isActivityVisible ? 'rotate-180 text-gray-500' : 'md:text-gray-900' } transform transition duration-200 ease-out `}
              />
            </button>
          </div>
          <button
            onClick={() => setIsActivityVisible((prev) => !prev)}
            className="flex justify-center items-center gap-2"
          >
            <div
              className={`${isActivityVisible ? 'text-gray-500' : 'text-gray-500 md:text-gray-900'} md:hover:text-gray-700 `}
            >
              {capitalizeEachWord(category.categoryName)}
            </div>
          </button>
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="hidden md:block font-bold text-lg text-gray-900 hover:text-gray-700"
          >
            <GrAddCircle />
          </button>
          <button
            onClick={() => setIsDeleteModalOpen(true)}
            className="hidden md:block font-bold text-xl text-red-500 hover:text-red-400"
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>

      <div className={`${isActivityVisible ? 'block' : 'block md:hidden'}`}>
        {activityEl}
      </div>

      {isAddModalOpen && (
        <Add onClose={() => setIsAddModalOpen(false)} />
      )}

      {isDeleteModalOpen && (
        <Delete onDelete={handleDelete} onCancel={handleCancel} />
      )}
    </>
  );
}
