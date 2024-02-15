import React, { createContext, useState } from "react";

export const filteredDataContext = createContext([]);

export default function FilteredDataContext({ children }) {
  const [filteredData, setFilteredData] = useState([]);
  return (
    <filteredDataContext.Provider value={{ filteredData, setFilteredData }}>
      {children}
    </filteredDataContext.Provider>
  );
}
