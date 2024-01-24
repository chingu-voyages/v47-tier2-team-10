// Activity.jsx
import React, { useState } from "react";
import { GoTasklist } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import Delete from "../modals/Delete";

export default function Activity({ activity, handleFilterData }) {
  const [isDeleteIconVisible, setIsDeleteIconVisible] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = () => {
    // Add logic for deletion
    setIsDeleteModalOpen(false);
  };

  const handleCancel = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="md:flex items-center gap-2 ml-5">
      <div
        className="flex gap-3 cursor-pointer"
        onMouseEnter={() => setIsDeleteIconVisible(true)}
        onMouseLeave={() => setIsDeleteIconVisible(false)}
      >
        <div className="flex">
          <div className="hover:text-gray-700 flex">
            <button className="text-lg font-bold ">
              <GoTasklist />
            </button>
            <p onClick={() => handleFilterData(activity.activityName)}>
              {activity.activityName}
            </p>
          </div>
          <button
            className={`${isDeleteIconVisible ? 'hidden md:block' : 'hidden'} text-xl font-bold text-red-500 hover:text-red-400 ml-5`}
            onClick={() => setIsDeleteModalOpen(true)}
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>

      {isDeleteModalOpen && (
        <Delete onDelete={handleDelete} onCancel={handleCancel} />
      )}
    </div>
  );
}
