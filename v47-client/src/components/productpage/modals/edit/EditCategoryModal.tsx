import React, { useState, useEffect, useContext } from "react";
import InputFields from "../modalUi/InputFields";
import Button from "../modalUi/Button";
import { productDataContext } from "../../../../context/ProductDataContext";
import Portal from "../modalUi/Portal";
import { capitalizeEachWord } from "../../../../utils/helperFunctions";

interface EditModalProps {
  setIsEditModalOpen: (value: boolean) => void;
  setEditCategoryNameInput: React.Dispatch<React.SetStateAction<string>>;
  categoryName: string;
  editCategoryNameInput: string;
}

function EditModal(props: EditModalProps) {
  const {
    categoryName,
    editCategoryNameInput,
    setEditCategoryNameInput,
    setIsEditModalOpen,
  } = props;
  const { setProductData } = useContext(productDataContext);

  const handleClick = () => {
    setProductData((prev) =>
      prev.map((category) =>
        category.categoryName === categoryName
          ? { ...category, categoryName: editCategoryNameInput.toUpperCase() }
          : category
      )
    );
    setIsEditModalOpen(false);
  };

  useEffect(() => {
    setEditCategoryNameInput((prev) => capitalizeEachWord(prev));
  }, []);

  return (
    <Portal>
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800 z-50">
        <div className="bg-white p-8 rounded-lg w-96">
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
          />
        </div>
      </div>
    </Portal>
  );
}

export default EditModal;
