import React, { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light", // this is the defalut value given in context
  darkTheme: () => {},
  lightTheme: () => {}, // 2 methods to change the theme
});
//when you share this context with other components, they will have access to these variables and methods too.

export const ThemeProvider = ThemeContext.Provider;
export function useTheme() {
  //custom hook to return the context
  return useContext(ThemeContext);
}
