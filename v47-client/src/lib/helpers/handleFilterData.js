export const handleFilterData = (taskName, productData, setFilteredData) => {
  const filterData = productData.flatMap((data) => {
    return data.activityTypes.filter((task) => {
      return task.activityName === taskName;
    });
  });
  setFilteredData(filterData);
};
