import React, { createContext, useEffect, useState } from "react";

interface DarkModeContextProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const darkModeContext = createContext<DarkModeContextProps>({
  darkMode: false,
  setDarkMode: () => false,
});

export default function DarkModeContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const contextValue: DarkModeContextProps = {
    darkMode,
    setDarkMode,
  };

  return (
    <darkModeContext.Provider value={contextValue}>
      {children}
    </darkModeContext.Provider>
  );
}
