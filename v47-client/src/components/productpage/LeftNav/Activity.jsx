import React, { useState } from "react";
import { GoTasklist } from "react-icons/go";
import { MdDeleteForever } from "react-icons/md";

export default function Activity({ activity, handleFilterData }) {
  const [isDeleteIconVisible, setIsDeleteIconVisible] = useState(false);

  return (
    <div className="md:flex items-center gap-2 ml-5">
      <div
        className="flex gap-3 cursor-pointer"
        onMouseEnter={() => setIsDeleteIconVisible(true)}
        onMouseLeave={() => setIsDeleteIconVisible(false)}
      >
        <div className='hover:text-gray-700 flex'>
          <button className="text-lg font-bold hover:text-gray-700">
            <GoTasklist />
          </button>
          <p onClick={() => handleFilterData(activity.activityName)}>
            {activity.activityName}
          </p>
          <button className={`${isDeleteIconVisible ? 'hidden md:block' : 'hidden'} text-lg font-bold text-red-500 hover:text-red-400 ml-2`}>
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}
