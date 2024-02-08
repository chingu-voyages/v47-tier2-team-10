import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import MenuModal from "../modals/MenuModal.jsx";
import TaskModal from "../modals/TaskModal.jsx";

export default function TaskList({ days, taskDescription, taskName, column }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  return (
    <div
      onClick={() => {
        setIsTaskModalOpen(!isTaskModalOpen);
      }}
      className={`rounded-lg p-4 mr-6 mb-6 flex  flex-col  cursor-pointer  relative  max-w-[320px] h-[96px] bg-gray-400`}
    >
      <h1 className="text-sm">{taskName}</h1>{" "}
      <div className="flex flex-1 mt-auto justify-end items-end">
        <BsThreeDots
          onClick={(e) => {
            setIsMenuOpen(!isMenuOpen);
            e.stopPropagation();
          }}
          className="hover:scale-110 hover:text-gray-600 duration-300 cursor-pointer active:scale-75 "
        />
      </div>
      {isMenuOpen && <MenuModal />}
      {isTaskModalOpen && (
        <TaskModal days={days} taskDescription={taskDescription} />
      )}
    </div>
  );
}
