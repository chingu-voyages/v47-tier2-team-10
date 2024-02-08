export const handleAddNewTask = (
  setFilteredData,
  setIsAddModalOpen,
  taskDescription,
  taskNameInput
) => {
  setFilteredData((prevData) => {
    const newTask = {
      days: [],
      taskDescription: taskDescription,
      taskName: taskNameInput,
      column: "Not Started"
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
