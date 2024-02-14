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

  const { setProductData,productData } = useContext(productDataContext)
  const {setFilteredData} = useContext(filteredDataContext)


  const handleDelete = () => {
    // Add logic for deletion
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

  const handleEditClick = () => {
    setIsEditModalOpen(true);
    setIsLeftNavOpen(false);
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
    setIsLeftNavOpen(false);
  };

  const handleActivityNameClick = (activity) => {
    handleFilterData(activity, productData, setFilteredData)
    setIsLeftNavOpen(false)
    }


  return (
    <>
      <li 
          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" 
          onMouseEnter={() => setIsActivityIconsVisible(true)}
          onMouseLeave={() => setIsActivityIconsVisible(false)}>
            <button onClick={() => handleActivityNameClick(activity.activityName)}>
              {activity.activityName}
            </button>
            <div className="ml-auto">
              <div className="gap-1 ml-auto  flex">
                <button
                  onClick={handleEditClick}
                  className={`${isActivityIconsVisible ? 'block' : 'lg:hidden block'} text-sm text-gray-900 hover:text-gray-700`} 
                >
                  <MdOutlineEdit />
                </button>
                <button
                  className={` ${isActivityIconsVisible ? 'block' : 'lg:hidden block'}text-md text-red-500 hover:text-red-400 `}
                  onClick={handleDeleteClick}
                >
                  <MdDeleteOutline />
                </button>
              </div>
            </div>
        </li>
        
        {/* modals  */}
        {isDeleteModalOpen && (
           <Delete 
           onDelete={handleDelete} 
           onCancel={handleCancel}
           name={activity.activityName}
           />
        )}

      {/* {isEditModalOpen && (
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
    </>
  );
}
