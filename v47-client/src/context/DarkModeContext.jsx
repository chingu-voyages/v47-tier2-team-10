import React, { createContext, useEffect, useState } from "react";

export const darkModeContext = createContext(false);

export default function DarkModeContext({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <darkModeContext.Provider value={{darkMode, setDarkMode}}>
      {children}
    </darkModeContext.Provider>
  );
}
