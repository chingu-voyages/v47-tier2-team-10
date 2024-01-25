// Activity.jsx
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import Delete from "../modals/Delete";
import { MdOutlineEdit } from "react-icons/md";

export default function Activity({ activity, handleFilterData }) {
  const [isActivityIconsVisible, setIsActivityIconsVisible] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = () => {
    // Add logic for deletion
    setIsDeleteModalOpen(false);
  };

  const handleCancel = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="md:flex items-center gap-2 ml-3">
      <div
        className="flex gap-3  w-full  justify-between"
        onMouseEnter={() => setIsActivityIconsVisible(true)}
        onMouseLeave={() => setIsActivityIconsVisible(false)}
      >
        <div className="flex w-full">
          <div className="flex md:ml-3">
            <p onClick={() => handleFilterData(activity.activityName)} className='hover:text-gray-700 cursor-pointer'>
              {activity.activityName}
            </p>
          </div>
          {isActivityIconsVisible && <div className="gap-1 ml-auto hidden md:flex">
            <button
              className="font-bold text-xl text-gray-900 hover:text-gray-700"
            >
              <MdOutlineEdit />
            </button>
            <button
              className={`text-xl font-bold text-red-500 hover:text-red-400 `}
              onClick={() => setIsDeleteModalOpen(true)}
            >
              <MdDeleteOutline />
            </button>
          </div>}
        </div>
      </div>

      {isDeleteModalOpen && (
        <Delete onDelete={handleDelete} onCancel={handleCancel} />
      )}
    </div>
  );
}
