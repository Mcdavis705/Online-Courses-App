import { createContext, useState, useContext } from "react";


export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme'); // gets 'dark' or 'light'
    return savedTheme === 'dark'; // returns true if 'dark', false otherwise
  });


  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newTheme = !prev; // flip the current value (true ⇄ false)
      localStorage.setItem('theme', newTheme ? 'dark' : 'light'); // save the new theme
      return newTheme; // update state
    });
  };


  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export const useTheme = () => useContext(ThemeContext);
