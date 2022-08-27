import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [showMenu, setCloseMenu] = useState(false);

  const handleCloseMenu = () => {
    setCloseMenu(!showMenu);
  };

  const handleGoSection = () => {
    handleCloseMenu();
  };

  return (
    <DataContext.Provider
      value={(showMenu, setCloseMenu, handleCloseMenu, handleGoSection)}
    >
      {children}
    </DataContext.Provider>
  );
};
