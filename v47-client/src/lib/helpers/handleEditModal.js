export const handleEditModal = (
  setProductData,
  activity,
  editCategoryNameInput
) => {
  setProductData((prevData) => {
    const updateCategoryName = prevData.map((data) => {
      return data.categoryName === activity
        ? {
            ...data,
            categoryName: editCategoryNameInput,
          }
        : data;
    });
    return updateCategoryName;
  });
};
