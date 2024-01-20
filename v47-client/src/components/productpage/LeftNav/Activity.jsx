import React, { useState } from "react";
import { GoTasklist } from "react-icons/go";
import { MdDeleteForever } from "react-icons/md";

export default function Activity({ activity, handleFilterData }) {
  const [isDeleteIconVisible, setIsDeleteIconVisible] = useState(false);

  return (
    <div className="md:flex items-center gap-1 ml-5 hidden text-gray-700">
      <div
        className="flex gap-1 cursor-pointer"
        onMouseEnter={() => setIsDeleteIconVisible(true)}
        onMouseLeave={() => setIsDeleteIconVisible(false)}
      >
        <button className="text-lg font-bold">
          <GoTasklist />
        </button>
        <p onClick={() => handleFilterData(activity.activityName)}>
          {activity.activityName}
        </p>
        {isDeleteIconVisible && (
          <button className="text-lg font-bold text-red-500 hover:text-red-400">
            <MdDeleteForever />
          </button>
        )}
      </div>
    </div>
  );
}
