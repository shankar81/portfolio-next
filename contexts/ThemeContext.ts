import React from "react";
import { Theme } from "../components/Layout/Layout";

type ThemeProviderType = {
  theme: Theme;
  onToggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeProviderType>({
  theme: "light",
  onToggleTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default ThemeContext;
