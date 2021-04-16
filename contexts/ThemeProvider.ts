import React from "react";
import { Theme } from "../components/Layout/Layout";

type ThemeProviderType = { theme: Theme; onToggleTheme: () => void };

const ThemeProvider = React.createContext<ThemeProviderType>({
  theme: "light",
  onToggleTheme: () => {},
});

export default ThemeProvider;
