import React from "react";

export default function Button({onClose, onClick}) {
  return (
    <div className="flex justify-between">
      <button
        className="bg-gray-300 text-gray-700 px-8 py-2 rounded"
        onClick={onClose}
        required
      >
        Cancel
      </button>

      <button
        className="bg-green-500  text-white px-10 py-2 rounded"
        onClick={() => onClick()}
      >
        Update
      </button>
    </div>
  );
}
