import React, { useContext, useState } from "react";
import InputFields from "./modalUi/InputFields";
import { filteredDataContext } from "../../../context/FilteredDataContext";
import Portal from "./modalUi/Portal";
import { NewTaskDataProps } from "../main/Main";
import SelectContent from "./modalUi/SelectContent";

interface AddProps {
  addModalProps: {
    newTaskData: NewTaskDataProps;
    setIsAddModalOpen: (value: boolean) => void;
    setNewTaskData: React.Dispatch<React.SetStateAction<NewTaskDataProps>>;
  };
}

export default function AddNewTasks(props: AddProps) {
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

    if (!/^\d{4}-\d{2}-\d{2}$/.test(addModalProps.newTaskData.days)) {
      alert("Format Days as YYYY-MM-DD");
      return;
    }
    setFilteredData((prevData) => {
      const newTask: NewTaskDataProps = {
        days: addModalProps.newTaskData.days,
        taskDescription: addModalProps.newTaskData.taskDescription,
        taskName: addModalProps.newTaskData.taskName,
        column: addModalProps.newTaskData.column,
        id: Math.floor(Math.random() * 10000000),
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
      id: 0,
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
          <div className="mb-6">
            <h1 className="block text-gray-700 text-sm font-semibold mb-2">
              Column
            </h1>
            <SelectContent
              column={addModalProps.newTaskData.column}
              handleInputContent={handleInputChange}
            />
          </div>

          <Buttons buttonsProps={buttonsProps} />
        </form>
      </div>
    </Portal>
  );
}

interface ButtonProps {
  handleClickValue: () => void;
  textValue: string;
  handleAddNewTask: () => void;
}
const Button = ({
  handleClickValue,
  textValue,
  handleAddNewTask,
}: ButtonProps) => {
  return (
    <button
      className={`py-2 rounded ${
        textValue === "Cancel"
          ? "px-8 text-gray-700 hover:opacity-70 duration-300 bg-gray-300 "
          : "bg-green-500  hover:brightness-125  duration-300   text-white px-10"
      }`}
      onKeyDown={(e) => e.key === "Enter" && handleAddNewTask()}
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
        handleAddNewTask={buttonsProps.handleAddNewTask}
        handleClickValue={() => buttonsProps.setIsAddModalOpen(false)}
        textValue={"Cancel"}
      />
      <Button
        handleAddNewTask={buttonsProps.handleAddNewTask}
        handleClickValue={() => buttonsProps.handleAddNewTask()}
        textValue={"add"}
      />
    </div>
  );
};
