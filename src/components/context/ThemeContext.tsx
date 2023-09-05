import React, { createContext } from "react"
import { theme } from "./Theme"

type ThemeContextProviderProps = {
   children: React.ReactNode
}

export const ThemeContext = createContext(theme);

const ThemeContextProvider = ({children}: ThemeContextProviderProps) => (
   <ThemeContext.Provider value={theme}>
      {children}
   </ThemeContext.Provider>
)

export default ThemeContextProvider