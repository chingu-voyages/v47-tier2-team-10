import React, { useState } from 'react';
import Portal from "./Portal/Portal"

function AddNewCategory({ onClose }) {
  const [categoryName, setCategoryName] = useState('');

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleAddCategory = () => {
    if (categoryName.trim() !== '') {
      alert(`Category "${categoryName}" added`);
      
      onClose();
    } else {
      alert('Please enter a valid category name');
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Portal>
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-96">
        <div className="mb-6">
          <label htmlFor="categoryName" className="block text-gray-700 text-sm font-semibold mb-2">
            Add new category
          </label>
          <input
            type="text"
            id="categoryName"
            className="w-full border border-gray-300 px-3 py-2 rounded"
            value={categoryName}
            onChange={handleCategoryNameChange}
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            className="bg-gray-300 text-gray-700 px-8 py-2 rounded"
            onClick={handleCancel}
            required
          >
            Cancel
          </button>

          <button
            className="bg-green-500 text-white px-10 py-2 rounded"
            onClick={handleAddCategory}
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
