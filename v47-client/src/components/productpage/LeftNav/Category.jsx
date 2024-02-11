import React, { useContext, useEffect, useState } from "react";
import { MdExpandMore, MdDeleteOutline } from "react-icons/md";
import Activity from "./Activity";
import { GrAddCircle } from "react-icons/gr";
import Add from "../modals/Add";
import Delete from "../modals/Delete";
import EditModal from "../modals/edit/EditCategoryModal";
import { MdOutlineEdit } from "react-icons/md";
import Aos from "aos";
import { productDataContext } from "../../../context/ProductDataContext";

export default function Category({ category, setIsLeftNavOpen }) {
  const [isActivityVisible, setIsActivityVisible] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCategoryIconsVisible, setIsCategoryIconsVisible] = useState(false);
  const [editCategoryNameInput, setEditCategoryNameInput] = useState("");

  const { setProductData } = useContext(productDataContext);

  useEffect(() => {
    Aos.init();
  }, []);

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleDelete = () => {
    setProductData(prev => (
      prev.filter(item => item.categoryName != category.categoryName)
    ))
    setIsDeleteModalOpen(false)
  }

  useEffect(() => {
    setEditCategoryNameInput(category.categoryName);
  }, [category]);

  const activityEl = category.activityTypes.map((activity, index) => (
    <Activity
      setIsLeftNavOpen={setIsLeftNavOpen}
      key={index}
      activity={activity}
      categoryName={category.categoryName}
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
        className="flex justify-between items-center gap-1   rounded-lg md:hover:bg-gray-100  md:p-2 md:ease-in md:duration-300"
        onMouseEnter={() => setIsCategoryIconsVisible(true)}
        onMouseLeave={() => setIsCategoryIconsVisible(false)}
        data-aos="fade"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <div className="flex gap-1 font-medium ">
          <div className="hidden md:block font-bold text-gray-800 dark:text-white">
            <button onClick={() => setIsActivityVisible((prev) => !prev)}>
              <MdExpandMore
                className={`${
                  isActivityVisible
                    ? "rotate-180 font-bold text-gray-800 dark:text-white"
                    : "font-bold text-gray-800 dark:text-white"
                } transform transition duration-200 ease-out `}
              />
            </button>
          </div>
          <button
            onClick={() => setIsActivityVisible((prev) => !prev)}
            className="flex justify-center items-center gap-2 md:cursor-pointer cursor-default "
          >
            <div
              className={`${
                isActivityVisible
                  ? "font-bold text-gray-800 dark:text-white"
                  : "font-bold text-gray-800 dark:text-white"
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
              className="hidden md:block font-bold text-lg  text-gray-900 hover:text-gray-700"
            >
              <MdOutlineEdit />
            </button>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="hidden md:block font-bold text-lg text-gray-900 hover:text-gray-700"
            >
              <GrAddCircle />
            </button>
            <button
              onClick={() => setIsDeleteModalOpen(true)}
              className="hidden md:block font-bold text-lg text-red-500 hover:text-red-400"
            >
              <MdDeleteOutline />
            </button>
          </div>
        )}
      </div>

      <div
        className={`${isActivityVisible ? "block mb-1" : "block md:hidden"}`}
      >
        {activityEl}
      </div>

      {isAddModalOpen && <Add onClose={() => setIsAddModalOpen(false)} />}

      {isDeleteModalOpen && (
        <Delete
          onDelete={handleDelete}
          onCancel={() => setIsDeleteModalOpen(false)}
        />
      )}
      {isEditModalOpen && (
        <EditModal
          editCategoryNameInput={editCategoryNameInput}
          categoryName={category.categoryName}
          setIsEditModalOpen={setIsEditModalOpen}
          setEditCategoryNameInput={setEditCategoryNameInput}
        />
      )}
    </>
  );
}
