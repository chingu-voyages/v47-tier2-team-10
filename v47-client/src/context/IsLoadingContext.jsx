import React, { createContext, useState } from "react";

export const isLoadingContext = createContext(true);

export default function IsLoadingContext({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <isLoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </isLoadingContext.Provider>
  );
}
