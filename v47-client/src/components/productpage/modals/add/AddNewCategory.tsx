import React, { useState, useContext } from "react";
import Portal from "../Portal/Portal";
import { productDataContext } from "../../../../context/ProductDataContext";

interface AddNewActivityProps {
  setIsNewCategoryModalOpen: (value: boolean) => void;
}

function AddNewCategory(props: AddNewActivityProps) {
  const { setIsNewCategoryModalOpen } = props;
  const [categoryName, setCategoryName] = useState<string>("");
  const [validation, setValidation] = useState<boolean>(false);

  const { setProductData } = useContext(productDataContext);

  const handleSubmit = () => {
    if (!categoryName) {
      setValidation(true);
    } else {
      const newCategory = {
        categoryName,
        activityTypes: [],
      };
      setProductData((prev) => [...prev, newCategory]);
      setIsNewCategoryModalOpen(false);
    }
  };

  return (
    <Portal>
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800 z-50">
        <div className="bg-white p-8 rounded-lg w-96">
          <div className="mb-6">
            <label
              htmlFor="categoryName"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Add New Category
            </label>
            <input
              type="text"
              id="categoryName"
              className="w-full border border-gray-300 px-3 py-2 rounded"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
            <p
              className={`text-red-500 text-sm ${
                validation ? "flex" : "hidden"
              }`}
            >
              Please fill in new category
            </p>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-gray-300 text-gray-700 px-8 py-2 rounded"
              onClick={() => setIsNewCategoryModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="bg-green-500 text-white px-10 py-2 rounded"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
}

export default AddNewCategory;
