import React, { useState, useEffect, useContext } from "react";
import InputFields from "../resuable/InputFields";
import Button from "../resuable/Button";
import { productDataContext } from "../../../../context/ProductDataContext";
import { handleEditModal } from "../../../../lib/helpers/handleEditModal";
import Portal from "../Portal/Portal"
import { capitalizeEachWord } from "../../../../lib/helpers/capitalizeEachWord";

function EditModal({
  setIsEditModalOpen,
  setEditCategoryNameInput,
  categoryName,
  editCategoryNameInput,
}) {

  const { productData, setProductData } = useContext(productDataContext);

  const handleClick = () => {
    setProductData(prev => (
      prev.map(category => category.categoryName === categoryName ?  {...category, categoryName: editCategoryNameInput.toUpperCase()} : category)
    ))
    setIsEditModalOpen(false);
  };

  useEffect(() => {
    setEditCategoryNameInput(prev => capitalizeEachWord(prev))
  }, [])

  return (
    <Portal>
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800 z-50">
      <div className="bg-white p-8 rounded-lg w-96">
        {/* <InputFields
          headerText={"Edit Category"}
          value={editCategoryNameInput}
          onChangeValue={setEditCategoryNameInput}
        /> */}
 
        {/* originally InputFields resusable componenet above, was having trouble with the tolowercase.  */}
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Edit Category
            </label>
            <input
              type="text"
              className="w-full border  border-gray-300 px-3 py-2 rounded"
              value={editCategoryNameInput}
              onChange={(e) => setEditCategoryNameInput(e.target.value)}
              required
            />
          </div>

          <Button
            onClick={handleClick}
            onClose={() => {
              setIsEditModalOpen(false);
              setEditCategoryNameInput(categoryName);
            }}
            textValue={"Cancel"}
          />
      </div>
    </div>
    </Portal>
  );
} 

export default EditModal;
