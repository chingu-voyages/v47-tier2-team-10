import React, { useState } from "react";
import InputFields from "./add/InputFields";

const Add = ({
  onClose,
  setTaskDescription,
  setTaskNameInput,
  addNewTask,
  taskDescription,
  taskNameInput,
}) => {
  const Button = ({ handleClickValue, textValue }) => {
    return (
      <button
        className={` py-2  rounded ${
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-96">
  
        <InputFields
          headerText="Task Name"
          onChangeValue={setTaskNameInput}
          value={taskNameInput}
          isTextArea={false}
        />
        <InputFields
          headerText="Task Description"
          onChangeValue={setTaskDescription}
          value={taskDescription}
          isTextArea={true}
        />
        <div className="flex justify-between">
          <Button handleClickValue={onClose} textValue={"Cancel"} />
          <Button handleClickValue={addNewTask} textValue={"Add"} />
        </div>
      </div>
    </div>
  );
};

export default Add;
