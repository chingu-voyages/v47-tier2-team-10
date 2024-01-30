import React, { useState, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import Delete from "../modals/Delete";
import EditModal from "../modals/edit/EditCategoryModal";
import { MdOutlineEdit } from "react-icons/md";
import Aos from "aos";

export default function Activity({ activity, handleFilterData, setIsLeftNavOpen }) {
  const [isActivityIconsVisible, setIsActivityIconsVisible] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  const handleDelete = () => {
    // Add logic for deletion
    setIsDeleteModalOpen(false);
  };

  const handleCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleClick = (activity) => {
    handleFilterData(activity)
    if (window.innerWidth <= 768) {
      setIsLeftNavOpen(false)
    }
  }

  return (
    <div className="md:flex items-center gap-2 ml-3"
    data-aos="fade" 
    data-aos-easing="ease-in-sine" data-aos-duration="600"
    >
      <div
        className="flex gap-3  w-full  justify-between"
        onMouseEnter={() => setIsActivityIconsVisible(true)}
        onMouseLeave={() => setIsActivityIconsVisible(false)}
      >
        <div className="flex w-full">
          <div className="flex md:ml-3">
            <p
              onClick={() => handleClick(activity.activityName)}
              className="hover:text-gray-700 cursor-pointer"
            >
              {activity.activityName}
            </p>
          </div>
          {isActivityIconsVisible && (
            <div className="gap-1 ml-auto hidden md:flex">
              <button
                onClick={handleEdit}
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
            </div>
          )}
        </div>
      </div>

      {isDeleteModalOpen && (
        <Delete onDelete={handleDelete} onCancel={handleCancel} />
      )}
      {/* 

// 
      {isEditModalOpen && (



        <EditModal
          task={{
            id: activity.id,
            name: activity.activityName,
          }}
          onClose={() => setIsEditModalOpen(false)}
          onUpdateTask={( updatedTaskName) => {
            // Logic to update the activity goes here
            // For example, you might want to call handleUpdateActivity from props
            // handleUpdateActivity(taskId, updatedTaskName);
            console.log(
              `Updating activity with ${updatedTaskName}`
            );
            setIsEditModalOpen(false);
          }}
        />
      )} */}
    </div>
  );
}
