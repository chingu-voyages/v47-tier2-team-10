import React, { useContext, useEffect, useState } from "react";
import { MdExpandMore, MdDeleteOutline } from "react-icons/md";
import Activity from "./Activity";
import { GrAddCircle } from "react-icons/gr";
import Delete from "../modals/Delete";
import EditModal from "../modals/edit/EditCategoryModal";
import { MdOutlineEdit } from "react-icons/md";
import Aos from "aos";
import { productDataContext } from "../../../context/ProductDataContext";
import { capitalizeEachWord } from "../../../lib/helpers/capitalizeEachWord";
import AddNewActivity from "../modals/add/AddNewActivity";


export default function Category({ category, setIsLeftNavOpen }) {
  const [isActivityVisible, setIsActivityVisible] = useState(false);
  // const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCategoryIconsVisible, setIsCategoryIconsVisible] = useState(false);
  const [editCategoryNameInput, setEditCategoryNameInput] = useState(category.categoryName);
  const [isAddNewActivityModalOpen, setIsNewActivityModalOpen] = useState(false)

  const { setProductData } = useContext(productDataContext);

  useEffect(() => {
    Aos.init();
  }, []);

  const onDelete = () => {
    setProductData(prev => (
      prev.filter(item => item.categoryName !== category.categoryName)
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

  return (
    <>
      <li 
        onMouseEnter={() => setIsCategoryIconsVisible(true)}
        onMouseLeave={() => setIsCategoryIconsVisible(false)}
        data-aos="fade" 
        data-aos-easing="ease-in-sine" 
        data-aos-duration="600">
          <div type="button" className={`hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
          >
            <button 
              className='flex gap-1' 
              onClick={() => setIsActivityVisible((prev) => !prev)}
            >
              <MdExpandMore
                className={`${
                  isActivityVisible ? "rotate-180 font-bold text-[#2d8630] dark:text-white " : "font-bold text-gray-800 dark:text-gray-400"
                } transform transition duration-200 ease-out `}
              />
              <p className={isActivityVisible ? 'text-[#2d8630] dark:text-white' : ''}>  
                {capitalizeEachWord(category.categoryName)}
              </p>
            </button>
           
            <div className="ml-auto">
              <div className="flex gap-1 ml-auto">
                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className={`${isCategoryIconsVisible ? 'block' : 'lg:hidden block'} text-md  text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300`}
                >
                  <MdOutlineEdit />
                </button>
                <button
                  onClick={() => setIsNewActivityModalOpen(true)}
                  className={`${isCategoryIconsVisible ? 'block' : 'lg:hidden block'} text-md  text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300`}
                >
                  <GrAddCircle />
                </button>
                <button
                  onClick={() => setIsDeleteModalOpen(true)}
                  className={`${isCategoryIconsVisible ? 'block' : 'lg:hidden block'} text-md  text-red-500 hover:text-red-400`} 
                >
                  <MdDeleteOutline />
                </button>
              </div>
            </div>
            
          </div>
      </li>
          
      <div id="account-accordion-child" className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${isActivityVisible ? '' : 'hidden'}`} >
        <ul className="pt-0 ps-2">
          {activityEl}  
        </ul>
      </div>
       
      {/* modals  */}
      {isAddNewActivityModalOpen && 
        <AddNewActivity 
        setIsNewActivityModalOpen={setIsNewActivityModalOpen}
        categoryName={category.categoryName}
      />}

      {isDeleteModalOpen && (
        <Delete
          onDelete={onDelete}
          onCancel={() => setIsDeleteModalOpen(false)}
          name={capitalizeEachWord(category.categoryName)}
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
