import React, { createContext } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children, value }) => (
  <DataContext.Provider value={value}>{children}</DataContext.Provider>
);
