import React, { useContext, useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import TaskModal from "../modals/TaskModal.tsx";
import { filteredDataContext } from "../../../context/FilteredDataContext.js";
import MenuModal from "../modals/MenuModal.tsx";
import { NewTaskDataProps } from "./Main.tsx";

interface TaskProps {
  days: string;
  taskDescription: string;
  taskName: string;
  column: string;
}

export interface TaskListProp {
  newEditTaskData: NewTaskDataProps;
  setNewEditTaskData: React.Dispatch<React.SetStateAction<NewTaskDataProps>>;
}

export interface TaskListProps {
  taskListProps: TaskListProp
  taskProps: TaskProps;
}

export default function TaskList(props: TaskListProps) {
  const { taskListProps, taskProps } = props;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isTaskModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isTaskModalOpen]);

  const taskContentProps = {
    taskProps,
    setIsMenuOpen,
    isMenuOpen,
  };

  return (
    <div
      onClick={() => {
        setIsTaskModalOpen(!isTaskModalOpen);
      }}
      className={`rounded-lg duration-300 space-y-2 p-4 mr-6 mb-6 flex  flex-col   cursor-pointer  relative w-[320px]  max-w-[320px] min-h-[96px] bg-gray-400`}
    >
      <TaskListCardContent taskContentProps={taskContentProps} />
      {isMenuOpen && <MenuModal taskName={taskProps.taskName} />}
      {isTaskModalOpen && (
        <TaskModal
          taskDescription={taskProps.taskDescription}
          taskListProps={taskListProps}
          taskProps={taskProps}
        />
      )}
    </div>
  );
}

interface TaskListCardContentProps {
  taskContentProps: {
    taskProps: TaskProps;
    setIsMenuOpen: (value: boolean) => void;
    isMenuOpen: boolean;
  };
}

const TaskListCardContent = (props: TaskListCardContentProps) => {
  const { taskContentProps } = props;

  // typing needs fixing
  const handleButtonClick = (e: any) => {
    e.stopPropagation();
    taskContentProps.setIsMenuOpen(!taskContentProps.isMenuOpen);
  };
  return (
    <>
      <h1 className="text-sm  break-words">
        {taskContentProps.taskProps.taskName}
      </h1>{" "}
      <h2 className="text-sm  break-words">
        Date Due: {taskContentProps.taskProps.days}
      </h2>{" "}
      <div className="flex flex-1 duration-300  mt-auto justify-end items-end">
        <BsThreeDots
          onClick={(e) => handleButtonClick(e)}
          className="hover:scale-110 hover:text-gray-600 duration-300 cursor-pointer active:scale-75 "
        />
      </div>
    </>
  );
};
