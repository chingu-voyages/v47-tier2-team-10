import React, { useContext, useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import TaskModal from "../modals/TaskModal.tsx";
import { filteredDataContext } from "../../../context/FilteredDataContext.js";
import MenuModal from "../modals/MenuModal.tsx";



interface TaskListProps {
  taskDescription: String;
  days: String;
  taskName: String;
  column: string;
  editTaskData: string;
  setEditTaskInput: (value: string) => void;
  setEditTaskNameInput: (value: string) => void;
  editTaskNameInput: string;
  setEditTaskColumnInput: (value: string) => void;
  setEditTaskData: (value: string) => void;
  editTaskColumnInput: string;
  editTaskInput: string;
}

export default function TaskList({
  days,
  taskDescription,
  taskName,
  column,
  editTaskData,
  setEditTaskData,
  editTaskInput,
  setEditTaskInput,
  setEditTaskNameInput,
  editTaskNameInput,
  editTaskColumnInput,
  setEditTaskColumnInput,
}: TaskListProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState<boolean>(false);



  useEffect(() => {
    if (isTaskModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isTaskModalOpen]);

  return (
    <div
      onClick={() => {
        setIsTaskModalOpen(!isTaskModalOpen);
      }}
      className={`rounded-lg duration-300 space-y-2 p-4 mr-6 mb-6 flex  flex-col   cursor-pointer  relative w-[320px]  max-w-[320px] min-h-[96px] bg-gray-400`}
    >
      <h1 className="text-sm  break-words">{taskName}</h1>{" "}
      <h2 className="text-sm  break-words">Date Due: {days}</h2>{" "}
      <div className="flex flex-1 duration-300  mt-auto justify-end items-end">
        <BsThreeDots
          onClick={(e) => {
            setIsMenuOpen(!isMenuOpen);
            e.stopPropagation();
          }}
          className="hover:scale-110 hover:text-gray-600 duration-300 cursor-pointer active:scale-75 "
        />
      </div>
      {isMenuOpen && <MenuModal taskName={taskName} />}
      {isTaskModalOpen && (
        <TaskModal
          column={column}
          setEditTaskNameInput={setEditTaskNameInput}
          editTaskNameInput={editTaskNameInput}
          editTaskColumnInput={editTaskColumnInput}
          setEditTaskColumnInput={setEditTaskColumnInput}
          editTaskInput={editTaskInput}
          setEditTaskInput={setEditTaskInput}
          setIsTaskModalOpen={setIsTaskModalOpen}
          editTaskData={editTaskData}
          setEditTaskData={setEditTaskData}
          days={days}
          taskName={taskName}
          taskDescription={taskDescription}
        />
      )}
    </div>
  );
}
