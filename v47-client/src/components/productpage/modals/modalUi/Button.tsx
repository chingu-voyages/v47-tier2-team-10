import React from "react";

interface Props {
  onClose: () => void;
  onClick: () => void;
  
}

export default function Button(props: Props) {
  const { onClick, onClose } = props;
  return (
    <div className="flex justify-between">
      <button
        className="bg-gray-300 text-gray-700 px-8 py-2 rounded"
        onClick={onClose}
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
