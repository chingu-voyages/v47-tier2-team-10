import { TaskModalProps } from "./NewTaskModal";
import { ReactNode, useContext, useEffect } from "react";
import { filteredDataContext } from "../../../context/FilteredDataContext";

export default function FormContent(props: TaskModalProps) {
  const { taskProp, setIsTaskModalOpen } = props;
  const { setFilteredData } = useContext(filteredDataContext);
  //  set currentvalues to object data
  useEffect(() => {
    taskProp.setNewEditTaskData((prevData) => {
      return {
        ...prevData,
        column: taskProp.column,
        days: taskProp.days,
        taskName: taskProp.taskName,
        taskDescription: taskProp.taskDescription,
        id: taskProp.id,
      };
    });
  }, []);

  useEffect(() => {
    console.log(taskProp.id);
  }, []);

  useEffect(() => {
    setFilteredData((prevData) => {
      return prevData.map((data) => {
        return {
          ...data,
          Tasks: data.Tasks.map((task) => {
            return task.id === taskProp.newEditTaskData.id
              ? {
                  ...task,
                  column: taskProp.newEditTaskData.column,
                  days: taskProp.newEditTaskData.days,
                  taskName: taskProp.newEditTaskData.taskName,
                  taskDescription: taskProp.newEditTaskData.taskDescription,
                }
              : task;
          }),
        };
      });
    });
  }, [JSON.stringify(taskProp.newEditTaskData)]);

  const handleInputContent = (propertyName: string, inputValue: string) => {
    taskProp.setNewEditTaskData((prevValue) => {
      return {
        ...prevValue,
        [propertyName]: inputValue,
      };
    });
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="border-b  gap-x-4  pb-4 whitespace-normal word-wrap break-word pt-0 flex justify-between items-center"
    >
      <div className="flex flex-1 flex-col space-y-4">
        <div className="flex flex-1 flex-col border-b-2 py-2 p-4">
          <InputContent
            type="text"
            value={taskProp.newEditTaskData.taskName}
            onChangeValue={(value) => handleInputContent("taskName", value)}
          />
        </div>

        <div className="p-4 space-y-4">
          <div className="max-w-[110px]">
            <InputContent
              type="date"
              value={taskProp.newEditTaskData.days}
              onChangeValue={(value) => handleInputContent("days", value)}
            />
          </div>
          <InputContent
            type="text"
            value={taskProp.newEditTaskData.taskDescription}
            onChangeValue={(value) =>
              handleInputContent("taskDescription", value)
            }
          />
          <SelectContent
            column={taskProp.newEditTaskData.column}
            handleInputContent={handleInputContent}
          />
        </div>
        <BottomModal setIsTaskModalOpen={setIsTaskModalOpen} />
      </div>
    </form>
  );
}

interface InputContentProps {
  value: string;
  onChangeValue: (value: string) => void;
  type: "text" | "date";
}

const InputContent = (props: InputContentProps) => {
  const { onChangeValue, value, type } = props;
  return (
    <input
      className="w-full"
      type={type}
      value={value}
      onChange={(e) => onChangeValue(e.target.value)}
    />
  );
};

interface SelectContentProps {
  handleInputContent: (value: string, value2: string) => void;
  column: string;
}

export const SelectContent = (props: SelectContentProps) => {
  const { column, handleInputContent } = props;
  return (
    <select
      className="hover:opacity-60 duration-100 cursor-pointer"
      onChange={(e) => handleInputContent("column", e.target.value)}
      value={column}
    >
      <option value="Not Started">Not Started</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>
  );
};

const BottomModal = (props: {
  setIsTaskModalOpen?: (value: boolean) => void;
}) => {
  const { setIsTaskModalOpen } = props;
  return (
    <div className="border-t-2 flex flex-1 p-4 pb-0">
      <button
        onClick={() => setIsTaskModalOpen && setIsTaskModalOpen(false)}
        className="ml-auto bg-gray-100  px-4 py-1 duration-300 hover:opacity-60  rounded-md"
      >
        Close
      </button>
    </div>
  );
};
