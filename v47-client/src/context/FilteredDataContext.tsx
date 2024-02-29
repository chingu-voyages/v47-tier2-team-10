import React, { createContext, useState } from "react";
import { ActivityTypes } from "../types/typings";

interface FilteredDataContextProps {
  filteredData: ActivityTypes[];
  setFilteredData: React.Dispatch<React.SetStateAction<ActivityTypes[]>>;
}

export const filteredDataContext = createContext<FilteredDataContextProps>({
  filteredData: [],
  setFilteredData: () => [],
});

export default function FilteredDataContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filteredData, setFilteredData] = useState<ActivityTypes[]>([]);

  const contextValue: FilteredDataContextProps = {
    filteredData,
    setFilteredData,
  };
  return (
    <filteredDataContext.Provider value={contextValue}>
      {children}
    </filteredDataContext.Provider>
  );
}
