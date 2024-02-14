import React, { useState } from "react";
import TaskList from "./TaskList";
import { IoIosAdd } from "react-icons/io";
import Add from "../modals/Add";
import DragnDrop from "./DragnDrop";
export default function Main({
  filteredData,
  isAddModalOpen,
  setIsAddModalOpen,
  setProductData,
  setFilteredData,
}) {
  const [taskDescription, setTaskDescription] = useState("");
  const [taskNameInput, setTaskNameInput] = useState("");

  const addNewTask = () => {
    setFilteredData((prevData) => {
      // need to figure out on what way to add days?
      // maybe a select
      const newTask = {
        days: [],
        taskDescription: taskDescription,
        taskName: taskNameInput,
      };

      // adds new task to current task you are on
      const newData = prevData.map((item) => {
        return {
          ...item,
          Tasks: item.Tasks.concat(newTask),
        };
      });

      return newData;
    });

    setIsAddModalOpen(false);
  };

  const renderTasksByColumn = (column) => {
    return filteredData.map((data) => {
      const tasksInColumn = data.Tasks.filter((task) => {
        return task.column === column;
      });
      return tasksInColumn.map((task, id) => {
        return <TaskList key={id} {...task} />;
      });
    });
  };

  console.log(filteredData)

  return (
    <>
      <section className="border dark:text-gray-200 mb-0  p-6 flex flex-col dark:bg-[#2B2C37] rounded-md duration-700  bg-gray-200  flex-1">
        <div className="flex flex-wrap flex-1">
          <div className="flex-1   flex flex-col">
            <h2>Not Started</h2>
            {
    ("Not Started")}
          </div>
          <div className="flex-1 flex flex-col">
            <h2>In Progress</h2>
            {renderTasksByColumn("In Progress")}
          </div>
          <div className="flex-1  flex flex-col">
            <h2>Done</h2>
            {renderTasksByColumn("Done")}
          </div>
          <div>
            <DragnDrop/>
          </div>
        </div>
        <div className="mt-0 h-full dark:text-gray-200 p-6 flex dark:bg-[#2B2C37] rounded-md duration-700  bg-gray-200  ">
          <div className="mt-auto hover:text-gray-500 cursor-pointer duration-300 flex items-center gap-x-2 ml-auto">
            <IoIosAdd />
            <h1 onClick={() => setIsAddModalOpen(true)}>Add new task</h1>
          </div>
        </div>

        {isAddModalOpen && (
          <Add
            taskDescription={taskDescription}
            taskNameInput={taskNameInput}
            setTaskDescription={setTaskDescription}
            setTaskNameInput={setTaskNameInput}
            addNewTask={addNewTask}
            onClose={setIsAddModalOpen}
          />
        )}
</section>
</>
  );
}
