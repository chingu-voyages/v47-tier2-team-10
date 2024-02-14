// Delete.jsx
import React from 'react';
import Portal from "./Portal/Portal"

export const Delete = ({ onDelete, onCancel, name }) => {
  return (
    <Portal>
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800 z-50">
      <div className="bg-white p-8 rounded-lg">
      <p className="text-gray-700 text-lg mb-10 mx-20">{`Are you sure you want to delete '${name}'?`}</p>
        <div className="flex justify-evenly">
          <button
            className="bg-red-500 text-white px-8 py-2 mr-2 rounded"
            onClick={onDelete} 
          >
            Delete
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-8 py-2 rounded"
            onClick={onCancel} 
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    </Portal>
  );
};

export default Delete;


