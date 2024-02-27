import React, { createContext, useState } from "react";

interface IsLoadingContextProps {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

export const isLoadingContext = createContext<IsLoadingContextProps>({
  isLoading: true,
  setIsLoading: () => true,
});

export default function IsLoadingContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const contextValue: IsLoadingContextProps = {
    isLoading,
    setIsLoading,
  };
  return (
    <isLoadingContext.Provider value={contextValue}>
      {children}
    </isLoadingContext.Provider>
  );
}
