import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import MenuModal from "../modals/MenuModal.jsx";
import TaskModal from "../modals/TaskModal.jsx";

export default function TaskList({ days, taskDescription, taskName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  return (
    <div
      onClick={() => setIsTaskModalOpen(!isTaskModalOpen)}
      className="rounded-lg p-4 cursor-pointer flex flex-1 relative hover:scale-105/ duration-300/ flex-col max-w-[320px] max-h-[96px]  bg-gray-400 "
    >
      {/* <h1 className="break-words">{days.join(', ')}</h1> */}
      <h1 data-aos="fade-down" data-aos-duration="1000" className="text-sm">
        {taskName}
      </h1>{" "}
      <div className="flex flex-1 justify-end items-end">
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
