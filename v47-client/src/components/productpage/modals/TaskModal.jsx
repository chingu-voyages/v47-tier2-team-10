import React, { useContext, useEffect, useState } from "react";
import { filteredDataContext } from "../../../context/FilteredDataContext";
import { IoIosClose } from "react-icons/io";
import { capitalizeEachWord } from "../../../lib/helpers/capitalizeEachWord";
export default function TaskModal({
  days,
  taskDescription,
  taskName,
  editTaskData,
  setEditTaskData,
  setIsTaskModalOpen,
  editTaskInput,
  setEditTaskInput,
}) {
  const { filteredData, setFilteredData } = useContext(filteredDataContext);
  const [editCalendar, setEditCalendar] = useState(false);
  const [editTaskName, setEditTaskName] = useState(false);

  const handleEdit = (value, inputValue) => {
    const updateData = filteredData.map((data) => {
      return {
        ...data,
        Tasks: data.Tasks.map((task) => {
          return task.taskDescription === taskDescription
            ? { ...task, [value]: inputValue }
            : task;
        }),
      };
    });
    setFilteredData(updateData);

    if (value === "days") {
      setEditCalendar(!editCalendar);
    } else {
      setEditTaskName(!editTaskName);
    }
  };

  useEffect(() => {
    setEditTaskData(days);
    setEditTaskInput(taskName);
  }, []);

  return (
    <div className="fixed px-12 mdpx-12 top-1/2  left-1/2 w-[100vw] h-[100vh] bg-black bg-opacity-60 z-50 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[500px]  space-y-4 rounded-md bg-white cursor-auto"
      >
        <div className="border-b p-4 flex justify-between items-center">
          <h1 className="font-semibold text-sm">
            {capitalizeEachWord(taskDescription)}
          </h1>
          <IoIosClose
            onClick={() => setIsTaskModalOpen(false)}
            className="text-2xl duration-300 hover:scale-125 active:scale-90 cursor-pointer"
          />
        </div>
        <form className="p-4 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="flex items-center justify-between">
            <input
              type="date"
              className="bg-gray-100 ronunded-md"
              value={editTaskData}
              onClick={() => setEditCalendar(!editCalendar)}
              onChange={(e) => setEditTaskData(e.target.value)}
            />
            {editCalendar && (
              <button
                onClick={() => handleEdit("days", editTaskData)}
                className="bg-gray-100  px-4 py-1 duration-300 hover:opacity-60  rounded-md"
              >
                Confirm
              </button>
            )}
          </div>
          <div className="flex items-center justify-between gap-x-4">
            {editTaskName ? (
              <>
                <textarea
                  className="font-semibold p-2 resize-none bg-gray-100  min-h-[100px] truncate text-sm focus:outline-none flex-1 flex"
                  value={editTaskInput}
                  onChange={(e) => setEditTaskInput(e.target.value)}
                ></textarea>
                <button
                  onClick={() => handleEdit("taskName", editTaskInput)}
                  className="bg-gray-100  px-4 py-1 duration-300 hover:opacity-60  rounded-md"
                >
                  Confirm
                </button>
              </>
            ) : (
              <>
                <textarea
                  disabled
                  className="w-full p-2 min-h-[100px] bg-gray-100 focus:outline-none resize-none"
                  value={capitalizeEachWord(taskName)}
                ></textarea>
                <button
                  onClick={() => setEditTaskName(!editTaskName)}
                  className="bg-gray-100  px-4 py-1 duration-300 hover:opacity-60  rounded-md"
                >
                  Edit
                </button>
              </>
            )}
          </div>
        </form>
        <div className="border-t p-4 flex flex-1">
          <button onClick={() => setIsTaskModalOpen(false)} className="ml-auto bg-gray-100  px-4 py-1 duration-300 hover:opacity-60  rounded-md">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
