import React, { useEffect, useState } from "react";
import { MdExpandMore, MdDeleteOutline } from "react-icons/md";
import Activity from "./Activity";
import { GrAddCircle } from "react-icons/gr";
import Add from "../modals/Add";
import Delete from "../modals/Delete";
import EditModal from "../modals/edit/EditCategoryModal";
import { MdOutlineEdit } from "react-icons/md";
import Aos from "aos";

export default function Category({
  category,
  handleFilterData,
  setProductData,
}) {
  const [isActivityVisible, setIsActivityVisible] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCategoryIconsVisible, setIsCategoryIconsVisible] = useState(false);
  const [editCategoryNameInput, setEditCategoryNameInput] = useState("");

  useEffect(() => {
    Aos.init();
  }, []);

  const handleDelete = () => {
    setIsDeleteModalOpen(false);
  };

  const handleCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleEditModal = (activity) => {
    setProductData((prevData) => {
      // data doesnt have id so maybe this is best
      // way to edit category names
      const updateCategoryName = prevData.map((data) => {
        return data.categoryName === activity
          ? { ...data, categoryName: editCategoryNameInput }
          : data;
      });
      return updateCategoryName;
    });
  };

  useEffect(() => {
    setEditCategoryNameInput(category.categoryName);
  }, [category]);

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
      <div
        className="flex justify-between items-center gap-1 mt-3 md:mt-5"
        onMouseEnter={() => setIsCategoryIconsVisible(true)}
        onMouseLeave={() => setIsCategoryIconsVisible(false)}
        data-aos="fade" 
        data-aos-easing="ease-in-sine" data-aos-duration="600"
      >
        <div className="flex gap-1 font-medium">
          <div className="hidden md:block font-medium text-lg">
            <button onClick={() => setIsActivityVisible((prev) => !prev)}>
              <MdExpandMore
                className={`${
                  isActivityVisible ? "rotate-180 " : "md:text-gray-900"
                } transform transition duration-200 ease-out `}
              />
            </button>
          </div>
          <button
            onClick={() => setIsActivityVisible((prev) => !prev)}
            className="flex justify-center items-center gap-2 md:cursor-pointer cursor-default"
          >
            <div
              className={`${
                isActivityVisible
                  ? "text-gray-500"
                  : "text-gray-500 md:text-gray-900"
              } break-words `}
            >
              {capitalizeEachWord(category.categoryName)}
            </div>
          </button>
        </div>
        {isCategoryIconsVisible && (
          <div className="flex gap-1">
            <button
              onClick={handleEdit}
              className="hidden md:block font-bold text-xl text-gray-900 hover:text-gray-700"
            >
              <MdOutlineEdit />
            </button>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="hidden md:block font-bold text-xl text-gray-900 hover:text-gray-700"
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
        )}
      </div>

      <div className={`${isActivityVisible ? "block" : "block md:hidden"}`}>
        {activityEl}
      </div>

      {isAddModalOpen && <Add onClose={() => setIsAddModalOpen(false)} />}

      {isDeleteModalOpen && (
        <Delete onDelete={handleDelete} onCancel={handleCancel} />
      )}

      {/*  sorry i decided to delete the other stuff, felt like this
        is more readable, change if if you need - anthony */}
      {isEditModalOpen && (
        <EditModal
          editCategoryNameInput={editCategoryNameInput}
          categoryName={category.categoryName}
          onClose={() => setIsEditModalOpen(false)}
          handleEditModal={handleEditModal}
          setEditCategoryNameInput={setEditCategoryNameInput}
        />
      )}
    </>
  );
}
