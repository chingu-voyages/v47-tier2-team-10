import { ActivityTypes, ProductData } from "../typings";

interface Props {
  taskName: string;
  productData: ProductData[];
  setFilteredData: React.Dispatch<React.SetStateAction<ActivityTypes[]>>;
}

export const handleFilterData = ({
  taskName,
  productData,
  setFilteredData,
}: Props) => {
  const filterData = productData.flatMap((data) => {
    return data.activityTypes.filter((task) => {
      return task.activityName === taskName;
    });
  });
  setFilteredData(filterData);
};
