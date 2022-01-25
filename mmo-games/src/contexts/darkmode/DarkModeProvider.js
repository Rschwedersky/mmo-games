import { useState } from 'react';
import { DarkModeContext } from './DarkModeContext';

export const DarkModeProvider = ({ children }) => {
  const[dark, setDark]= useState(false);
    
  return <DarkModeContext.Provider value={{dark, setDark}}>{children}</DarkModeContext.Provider>;
};