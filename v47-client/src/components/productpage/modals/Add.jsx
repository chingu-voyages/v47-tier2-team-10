import React, { useContext, useState } from "react";
import InputFields from "./resuable/InputFields";
import { handleAddNewTask } from "../../../lib/helpers/handleAddNewTask";
import { filteredDataContext } from "../../../context/FilteredDataContext";
import Portal from "./Portal/Portal";

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
  const { setFilteredData, filteredData } = useContext(filteredDataContext);
  console.log(filteredData);
  return (
    <Portal>
      <div className="fixed inset-0 z-50 flex items-center px-12 md:px-0  justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-8 rounded-lg w-[500px]">
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
          <InputFields
            headerText="Days"
            onChangeValue={(value) => {
              return setNewTaskData((prevData) => {
                return {
                  ...prevData,
                  days: value,
                };
              });
            }}
            value={newTaskData.days}
            placeholder={"format as YYYY-MM-DD"}
          />
          <InputFields
            headerText="Column"
            onChangeValue={(value) => {
              return setNewTaskData((prevData) => {
                return {
                  ...prevData,
                  column: value,
                };
              });
            }}
            value={newTaskData.column}
            placeholder={`Pick either: 'Not Started', 'In Progress', 'Done' `}
          />
          <div className="flex justify-between">
            <Button
              handleClickValue={() => setIsAddModalOpen(false)}
              textValue={"Cancel"}
            />
            <Button
              handleClickValue={() => {
                handleAddNewTask(
                  setFilteredData,
                  setIsAddModalOpen,
                  newTaskData.taskDescription,
                  newTaskData.taskName,
                  newTaskData.days,
                  newTaskData.column
                );
                setNewTaskData({ taskDescription: "", taskName: "" });
              }}
              textValue={"Add"}
            />
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Add;
