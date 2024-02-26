import React, { createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children, value }) => (
  <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
);
