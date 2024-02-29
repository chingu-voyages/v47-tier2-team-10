import React, { useContext, useState } from "react";
import InputFields from "./resuable/InputFields";
import { filteredDataContext } from "../../../context/FilteredDataContext";
import Portal from "./Portal/Portal";
import { NewTaskDataProps } from "../main/Main";

interface ButtonProps {
  handleClickValue: () => void;
  textValue: string;
}
const Button = ({ handleClickValue, textValue }: ButtonProps) => {
  return (
    <button
      className={`py-2 rounded ${
        textValue === "Cancel"
          ? "px-8 text-gray-700 bg-gray-300 "
          : "bg-green-500  text-white px-10"
      }`}
      onClick={() => handleClickValue()}
    >
      {textValue}
    </button>
  );
};

interface AddProps {
  newTaskData: NewTaskDataProps;
  setIsAddModalOpen: (value: boolean) => void;
  setNewTaskData: React.Dispatch<React.SetStateAction<NewTaskDataProps>>;
}
const Add = (props: AddProps) => {
  const { newTaskData, setIsAddModalOpen, setNewTaskData } = props;
  const { setFilteredData } = useContext(filteredDataContext);

  const handleAddNewTask = () => {
    setFilteredData((prevData) => {
      const newTask = {
        days: newTaskData.days,
        taskDescription: newTaskData.taskDescription,
        taskName: newTaskData.taskName,
        column: newTaskData.column,
      };

      const newData = prevData.map((item) => {
        return {
          ...item,
          Tasks: item.Tasks.concat(newTask),
        };
      });
      return newData;
    });
    setNewTaskData({
      taskDescription: "",
      taskName: "",
      column: "",
      days: "",
    });
    setIsAddModalOpen(false);
  };

  return (
    <Portal>
      <div className="fixed inset-0 z-50 flex items-center px-12 md:px-0  justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-8 rounded-lg w-[500px]">
          <InputFields
            headerText="Task Name"
            onChangeValue={(value: string) => {
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
            onChangeValue={(value: string) => {
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
            onChangeValue={(value: string) => {
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
            onChangeValue={(value: string) => {
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

            <button
              className={`py-2 rounded ${"bg-green-500  text-white px-10"}`}
              onClick={() => handleAddNewTask()}
            >
              add
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Add;
