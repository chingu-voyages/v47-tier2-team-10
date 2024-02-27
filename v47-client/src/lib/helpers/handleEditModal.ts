import { ProductData } from "../typings";

interface Props {
  setProductData: React.Dispatch<React.SetStateAction<ProductData[]>>;
  activity: string
  editCategoryNameInput: string
}

export const handleEditModal = ({
  setProductData,
  activity,
  editCategoryNameInput,
}: Props) => {
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
