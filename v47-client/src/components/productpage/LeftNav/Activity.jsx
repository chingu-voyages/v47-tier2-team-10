import React, { useState, useEffect, useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import Delete from "../modals/Delete";
import EditModal from "../modals/edit/EditCategoryModal";
import { MdOutlineEdit } from "react-icons/md";
import { handleFilterData } from "../../../lib/helpers/handleFilterData";
import { productDataContext } from "../../../context/ProductDataContext";
import { filteredDataContext } from "../../../context/FilteredDataContext";

export default function Activity({ activity,  setIsLeftNavOpen, categoryName }) {
  const [isActivityIconsVisible, setIsActivityIconsVisible] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const { setProductData, productData} = useContext(productDataContext)
  const {setFilteredData} = useContext(filteredDataContext)

  const handleDelete = () => {
    let updatedProductData = []
    productData.forEach(item => {
      if(item.categoryName === categoryName) {
        let updatedCategory = {}
        const updatedActivtyTypes = item.activityTypes.filter(item => item.activityName != activity.activityName)
        updatedCategory = {...item, activityTypes: updatedActivtyTypes}
        updatedProductData = [...updatedProductData, updatedCategory]
      } else {
        updatedProductData = [...updatedProductData, item]
      }
    })
    setProductData(updatedProductData)
    setIsDeleteModalOpen(false);
  };

  const handleCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleClick = (activity) => {
    handleFilterData(activity, productData, setFilteredData)
    if (window.innerWidth <= 768) {
      setIsLeftNavOpen(false)
    }
  }

  return (
    <div className="md:flex items-center gap-2 ml-3 rounded-lg md:hover:bg-gray-100  md:p-1 md:ease-in md:duration-300"
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
              className="text-gray-600 dark:text-gray-400 cursor-pointer"
            >
              {activity.activityName}
            </p>
          </div>
          {isActivityIconsVisible && (
            <div className="gap-1 ml-auto hidden md:flex">
              <button
                onClick={handleEdit}
                className="font-bold text-lg text-gray-900 hover:text-gray-700"
              >
                <MdOutlineEdit />
              </button>
              <button
                className={`text-lg font-bold text-red-500 hover:text-red-400 `}
                onClick={() => setIsDeleteModalOpen(true)}
              >
                <MdDeleteOutline />
              </button>
            </div>
          )}
        </div>
      </div>

      {isDeleteModalOpen && (
        <Delete 
        onDelete={handleDelete} 
        onCancel={handleCancel}
        name={activity.activityName}
        />
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
