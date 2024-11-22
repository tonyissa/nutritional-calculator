import { createContext, useEffect, useState } from "react";
import { IThemeContext, ThemeProps, ThemeType } from "./ThemeTypes";

export const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  toggleTheme: () => {}
});

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") as ThemeType | null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeType | null;

    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light")
    }
    
  }, [])

  const toggleTheme = () => setTheme(prevTheme => {
    const newTheme = prevTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    
    return newTheme;
  });

  if (theme) {
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }
};