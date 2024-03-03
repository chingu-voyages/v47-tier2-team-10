import React, { useContext, useEffect, useState } from "react";
import MenuModal from "../modals/MenuModal.tsx";
import { NewTaskDataProps } from "./Main.tsx";
import NewTaskModal from "../modals/NewTaskModal.tsx";
import TaskListCardContent from "./TaskListCardContent.tsx";

export interface TaskProps {
  newEditTaskData: NewTaskDataProps;
  setNewEditTaskData: React.Dispatch<React.SetStateAction<NewTaskDataProps>>;
  days: string;
  taskDescription: string;
  taskName: string;
  column: string;
  id: number;
}

export interface TaskListProps {
  taskProp: TaskProps;
}

export default function TaskList(props: TaskListProps) {
  const { taskProp } = props;
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
    taskName: taskProp.taskName,
    days: taskProp.days,
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
      {isMenuOpen && <MenuModal taskName={taskProp.taskName} />}
      {isTaskModalOpen && (
        <NewTaskModal
          taskProp={taskProp}
          setIsTaskModalOpen={setIsTaskModalOpen}
        />
      )}
    </div>
  );
}
