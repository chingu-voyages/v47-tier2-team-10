import React, { useState, useEffect, useContext, ReactNode } from "react";
import TaskList from "./TaskList";
import { IoIosAdd } from "react-icons/io";
import Add from "../modals/Add";
import { filteredDataContext } from "../../../context/FilteredDataContext";
import { isLoadingContext } from "../../../context/IsLoadingContext";
import { prodouctDataImg } from "../../../assets";
import MainContentColumn from "./MainContentColumn";

interface MainProps {
  isAddModalOpen: boolean;
  setIsAddModalOpen: (value: boolean) => void;
}

export interface NewTaskDataProps {
  taskDescription: string;
  taskName: string;
  days: string;
  column: string;
}

export default function Main(props: MainProps) {
  const { isAddModalOpen, setIsAddModalOpen } = props;
  const [newTaskData, setNewTaskData] = useState<NewTaskDataProps>({
    taskDescription: "",
    taskName: "",
    days: "",
    column: "",
  });
  const [editTaskData, setEditTaskData] = useState<string>("");
  const [editTaskInput, setEditTaskInput] = useState<string>("");
  const [editTaskColumnInput, setEditTaskColumnInput] = useState<string>("");
  const [editTaskNameInput, setEditTaskNameInput] = useState<string>("");
  const { filteredData } = useContext(filteredDataContext);
  const { isLoading } = useContext(isLoadingContext);

  const [newEditTaskData, setNewEditTaskData] = useState<NewTaskDataProps>({
    column: "",
    days: "",
    taskDescription: "",
    taskName: "",
  });

  const taskListProps = {
    newEditTaskData,
    setNewEditTaskData,
  };

  const renderTasksByColumn = (column: string) => {
    return filteredData.map((data) => {
      const tasksInColumn = data.Tasks.filter(
        (task) => task.column.toLowerCase() === column.toLowerCase()
      );
      return tasksInColumn.map((task, id) => {
        return (
          <TaskList
            setEditTaskNameInput={setEditTaskNameInput}
            editTaskNameInput={editTaskNameInput}
            editTaskColumnInput={editTaskColumnInput}
            setEditTaskColumnInput={setEditTaskColumnInput}
            setEditTaskInput={setEditTaskInput}
            editTaskInput={editTaskInput}
            editTaskData={editTaskData}
            setEditTaskData={setEditTaskData}
            key={id}
            {...task}
          />
        );
      });
    });
  };

  const addModalProps = {
    setIsAddModalOpen,
    newTaskData,
    setNewTaskData,
  };

  return (
    <>
      <section className="dark:text-gray-200  mb-10 lg:ml-4  p-6 flex flex-col dark:bg-[#2B2C37] rounded-md duration-300  bg-gray-200  flex-1">
        {isLoading ? (
          <MainContentIsLoading />
        ) : filteredData.length > 0 ? (
          <MainContent renderTasksByColumn={renderTasksByColumn} />
        ) : (
          <MainContentDataNotLoaded />
        )}
        <AddNewTaskButton setIsAddModalOpen={setIsAddModalOpen} />
        {isAddModalOpen && <Add addModalProps={addModalProps} />}
      </section>
    </>
  );
}

const MainContent = (props: {
  renderTasksByColumn: (value: string) => ReactNode;
}) => {
  const { renderTasksByColumn } = props;
  return (
    <div className="flex flex-wrap flex-1  gap-x-4  flex-col mx-auto  md:flex-row">
      <MainContentColumn
        renderTasksByColumn={renderTasksByColumn}
        content="Not Started"
      />
      <MainContentColumn
        renderTasksByColumn={renderTasksByColumn}
        content="In Progress"
      />
      <MainContentColumn
        renderTasksByColumn={renderTasksByColumn}
        content="Done"
      />
    </div>
  );
};

const MainContentDataNotLoaded = () => {
  return (
    <figure className="h-full  mx-auto flex justify-between items-center">
      <img
        className="object-cover h-[calc(100vh_-_17rem)]"
        src={prodouctDataImg}
        alt=""
      />
    </figure>
  );
};

const MainContentIsLoading = () => {
  return (
    <div className="flex flex-wrap flex-1 gap-x-2 justify-center">
      {new Array(9).fill(0).map((_, index) => (
        <div
          key={index}
          className="w-[100%] rounded-md md:w-[48%] lg:w-[32%]  h-[96px] bg-gray-400  animate-pulse mb-3"
        ></div>
      ))}
    </div>
  );
};

const AddNewTaskButton = (props: {
  setIsAddModalOpen: (value: boolean) => void;
}) => {
  return (
    <div className="mt-0 h-full dark:text-gray-200 p-6 flex dark:bg-[#2B2C37] rounded-md duration-300  bg-gray-200  ">
      <div className="mt-auto hover:text-gray-500 cursor-pointer duration-300 flex items-center gap-x-2 ml-auto">
        <IoIosAdd />
        <h1 onClick={() => props.setIsAddModalOpen(true)}>Add new task</h1>
      </div>
    </div>
  );
};
