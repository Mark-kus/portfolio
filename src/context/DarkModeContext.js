"use client";

import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children, initialDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        Cookies.set("theme", "dark", { expires: 365 });
      } else {
        document.documentElement.classList.remove("dark");
        Cookies.set("theme", "light", { expires: 365 });
      }
      return newMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkModeContext = () => useContext(DarkModeContext);
