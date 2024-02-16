export const handleAddNewTask = (
  setFilteredData,
  setIsAddModalOpen,
  taskDescription,
  taskNameInput,
  daysInput,
  columnInput
) => {
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
