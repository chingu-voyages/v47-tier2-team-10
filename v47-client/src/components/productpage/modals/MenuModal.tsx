import React, { useContext } from "react";
import { filteredDataContext } from "../../../context/FilteredDataContext";


// idk why but this doesnt work without putting it as any
// when its a string it just complains? possible fixx
// change both task.taskname to lowercase and pass taskname
// as lowercase string idk why it kinda works
interface Props {
  taskName: any;
}

export default function MenuModal({ taskName }: Props) {
  const { filteredData, setFilteredData } = useContext(filteredDataContext);

  const handleFilterData = (taskName: any) => {
    const updateData = filteredData.map((data) => {
      return {
        ...data,
        Tasks: data.Tasks.filter((task) => {
          console.log(task.taskName !== taskName)
          return task.taskName !== taskName;
        }),
      };
    });
    setFilteredData(updateData);
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
