import React, { useContext, useState } from "react";
import InputFields from "./resuable/InputFields";
import { handleAddNewTask } from "../../../lib/helpers/handleAddNewTask";
import { filteredDataContext } from "../../../context/FilteredDataContext";
import Portal from "./Portal/Portal"

const Button = ({ handleClickValue, textValue }) => {
  return (
    <button
      className={`py-2 rounded ${
        textValue === "Cancel"
          ? "px-8 text-gray-700 bg-gray-300 "
          : "bg-green-500  text-white px-10"
      }`}
      onClick={() => handleClickValue()}
      required
    >
      {textValue}
    </button>
  );
};

const Add = ({ newTaskData, setNewTaskData, setIsAddModalOpen }) => {
  const { setFilteredData } = useContext(filteredDataContext);
  return (
    <Portal>
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-96">
        <InputFields
          headerText="Task Name"
          onChangeValue={(value) => {
            return setNewTaskData((prevData) => {
              return {
                ...prevData,
                taskName: value,
              };
            });
          }}
          value={newTaskData.taskName}
          isTextArea={false}
        />
        <InputFields
          headerText="Task Description"
          onChangeValue={(value) => {
            return setNewTaskData((prevData) => {
              return {
                ...prevData,
                taskDescription: value,
              };
            });
          }}
          value={newTaskData.taskDescription}
          isTextArea={true}
        />
        <div className="flex justify-between">
          <Button
            handleClickValue={() => setIsAddModalOpen(false)}
            textValue={"Cancel"}
          />
          <Button
            handleClickValue={() =>
              handleAddNewTask(
                setFilteredData,
                setIsAddModalOpen,
                newTaskData.taskDescription,
                newTaskData.taskName
              )
            }
            textValue={"Add"}
          />
        </div>
      </div>
    </div>
    </Portal>
  );
};

export default Add;
