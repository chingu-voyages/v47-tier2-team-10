import React, { useContext } from "react";
import { filteredDataContext } from "../../../context/FilteredDataContext";

export default function MenuModal({taskName}) {
  const { filteredData, setFilteredData } = useContext(filteredDataContext);

  const handleFilterData = (taskName) => {
    const updateData = filteredData.map((data) => {
      return {
        ...data,
        Tasks: data.Tasks.filter((task) => {
          return task.taskName !== taskName;
        }),
      };
    });
    setFilteredData(updateData)
    console.log(updateData);
  };
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute shadow-sm right-0  z-50 -bottom-[40px] rounded-lg p-3  bg-white text-black"
    >
      <span onClick={() => handleFilterData(taskName)}>Delete</span>
    </div>
  );
}
