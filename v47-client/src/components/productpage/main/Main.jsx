import React, { useState } from "react";
import TaskList from "./TaskList";
import { IoIosAdd } from "react-icons/io";
import Add from "../modals/Add";
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

  return (
    <section className="border dark:text-gray-200 p-6 flex dark:bg-[#2B2C37] rounded-md duration-700  bg-gray-200  flex-1">
      <div className="space-y-4 flex flex-1 flex-col ">
        {filteredData.map((data) =>
          data.Tasks.map((task, id) => <TaskList key={id} {...task} />)
        )}
        <div className="flex flex-1">
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
      </div>
    </section>
  );
}
