import { ActivityTypes } from "../typings";

export interface AddNewTaskProps {
  setFilteredData: React.Dispatch<React.SetStateAction<ActivityTypes[]>>;
  setIsAddModalOpen: (value: boolean) => void;
  taskDescription: string;
  taskNameInput: string;
  daysInput: string;
  columnInput: string;
}


export const handleAddNewTask = ({
  setFilteredData,
  setIsAddModalOpen,
  taskDescription,
  taskNameInput,
  daysInput,
  columnInput,
}: AddNewTaskProps) => {
  setFilteredData((prevData) => {
    const newTask = {
      days: daysInput,
      taskDescription: taskDescription,
      taskName: taskNameInput,
      column: columnInput,
    };

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
