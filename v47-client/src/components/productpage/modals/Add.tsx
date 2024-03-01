import React, { useContext, useState } from "react";
import InputFields from "./resuable/InputFields";
import { filteredDataContext } from "../../../context/FilteredDataContext";
import Portal from "./Portal/Portal";
import { NewTaskDataProps } from "../main/Main";

interface AddProps {
  addModalProps: {
    newTaskData: NewTaskDataProps;
    setIsAddModalOpen: (value: boolean) => void;
    setNewTaskData: React.Dispatch<React.SetStateAction<NewTaskDataProps>>;
  };
}

export default function Add(props: AddProps) {
  const { addModalProps } = props;
  const { setFilteredData } = useContext(filteredDataContext);

  const handleAddNewTask = () => {
    if (
      !addModalProps.newTaskData.taskName ||
      !addModalProps.newTaskData.taskDescription ||
      !addModalProps.newTaskData.days ||
      !addModalProps.newTaskData.column
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setFilteredData((prevData) => {
      const newTask: NewTaskDataProps = {
        days: addModalProps.newTaskData.days,
        taskDescription: addModalProps.newTaskData.taskDescription,
        taskName: addModalProps.newTaskData.taskName,
        column: addModalProps.newTaskData.column,
      };

      const newData = prevData.map((item) => {
        return {
          ...item,
          Tasks: item.Tasks.concat(newTask),
        };
      });
      return newData;
    });
    addModalProps.setNewTaskData({
      taskDescription: "",
      taskName: "",
      column: "",
      days: "",
    });
    addModalProps.setIsAddModalOpen(false);
  };

  const handleInputChange = (propertyName: string, value: string) => {
    addModalProps.setNewTaskData((prevValue) => {
      return {
        ...prevValue,
        [propertyName]: value,
      };
    });
  };

  const { setIsAddModalOpen } = addModalProps;

  const buttonsProps = {
    handleAddNewTask,
    setIsAddModalOpen,
  };

  return (
    <Portal>
      <div className="fixed inset-0 z-50 flex items-center px-12 md:px-0  justify-center bg-gray-800 bg-opacity-50">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white p-8 rounded-lg w-[500px]"
        >
          <InputFields
            headerText="Task Name"
            onChangeValue={(value: string) =>
              handleInputChange("taskName", value)
            }
            value={addModalProps.newTaskData.taskName}
            isTextArea={false}
          />
          <InputFields
            headerText="Task Description"
            onChangeValue={(value) =>
              handleInputChange("taskDescription", value)
            }
            value={addModalProps.newTaskData.taskDescription}
            isTextArea={true}
          />
          <InputFields
            headerText="Days"
            onChangeValue={(value) => handleInputChange("days", value)}
            value={addModalProps.newTaskData.days}
            placeholder={"format as YYYY-MM-DD"}
          />
          <InputFields
            headerText="Column"
            onChangeValue={(value) => handleInputChange("column", value)}
            value={addModalProps.newTaskData.column}
            placeholder={`Pick either: 'Not Started', 'In Progress', 'Done' `}
          />
          <Buttons buttonsProps={buttonsProps} />
        </form>
      </div>
    </Portal>
  );
}

interface ButtonProps {
  handleClickValue: () => void;
  textValue: string;
}
const Button = ({ handleClickValue, textValue }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`py-2 rounded ${
        textValue === "Cancel"
          ? "px-8 text-gray-700 hover:opacity-70 duration-300 bg-gray-300 "
          : "bg-green-500  hover:brightness-125  duration-300   text-white px-10"
      }`}
      onClick={handleClickValue}
    >
      {textValue}
    </button>
  );
};

interface Buttons {
  buttonsProps: {
    setIsAddModalOpen: (value: boolean) => void;
    handleAddNewTask: () => void;
  };
}

const Buttons = (props: Buttons) => {
  const { buttonsProps } = props;
  return (
    <div className="flex justify-between">
      <Button
        handleClickValue={() => buttonsProps.setIsAddModalOpen(false)}
        textValue={"Cancel"}
      />
      <Button
        handleClickValue={() => buttonsProps.handleAddNewTask()}
        textValue={"add"}
      />
    </div>
  );
};
