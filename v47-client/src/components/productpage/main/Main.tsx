import React, { useState, useEffect, useContext } from "react";
import TaskList from "./TaskList";
import { IoIosAdd } from "react-icons/io";
import Add from "../modals/Add";
import { filteredDataContext } from "../../../context/FilteredDataContext";
import { isLoadingContext } from "../../../context/IsLoadingContext";
import { prodouctDataImg } from "../../../assets";

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

  return (
    <>
      <section className="dark:text-gray-200  mb-10 lg:ml-4  p-6 flex flex-col dark:bg-[#2B2C37] rounded-md duration-300  bg-gray-200  flex-1">
        {isLoading ? (
          <div className="flex flex-wrap flex-1 gap-x-2 justify-center">
            {new Array(9).fill(0).map((_, index) => (
              <div
                key={index}
                className="w-[100%] rounded-md md:w-[48%] lg:w-[32%]  h-[96px] bg-gray-400  animate-pulse mb-3"
              ></div>
            ))}
          </div>
        ) : filteredData.length > 0 ? (
          <div className="flex flex-wrap flex-1  gap-x-4  flex-col mx-auto  md:flex-row">
            <div className="flex-1 flex flex-col w-[320px]">
              <div className="flex items-center gap-x-2 mb-4  ">
                <div className="bg-[#49c4e5] w-3 rounded-full h-3"></div>
                <h2 className="text-[#828fa3] uppercase ">Not Started</h2>
              </div>
              {renderTasksByColumn("Not Started")}
            </div>
            <div className="flex-1 flex flex-col  w-[320px]">
              <div className="flex items-center gap-x-2  mb-4 ">
                <div className="bg-[#8471f2] w-3 rounded-full h-3"></div>
                <h2 className="text-[#828fa3] uppercase">In Progress</h2>
              </div>
              {renderTasksByColumn("In Progress")}
            </div>
            <div className="flex-1  flex flex-col  w-[320px]">
              <div className="flex items-center gap-x-2 mb-4 ">
                <div className="bg-[#67E2AE] w-3 rounded-full h-3"></div>
                <h2 className="text-[#828fa3] uppercase">Done</h2>
              </div>
              {renderTasksByColumn("Done")}
            </div>
          </div>
        ) : (
          <figure className="h-full  mx-auto flex justify-between items-center">
            <img
              className="object-cover h-[calc(100vh_-_17rem)]"
              src={prodouctDataImg}
              alt=""
            />
          </figure>
        )}
        <div className="mt-0 h-full dark:text-gray-200 p-6 flex dark:bg-[#2B2C37] rounded-md duration-300  bg-gray-200  ">
          <div className="mt-auto hover:text-gray-500 cursor-pointer duration-300 flex items-center gap-x-2 ml-auto">
            <IoIosAdd />
            <h1 onClick={() => setIsAddModalOpen(true)}>Add new task</h1>
          </div>
        </div>
        {isAddModalOpen && (
          <Add
            setIsAddModalOpen={setIsAddModalOpen}
            newTaskData={newTaskData}
            setNewTaskData={setNewTaskData}
          />
        )}
      </section>
    </>
  );
}
