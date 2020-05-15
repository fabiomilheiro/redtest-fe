import { createContext } from "react";
import themes from "./themes";

const ThemeContext = createContext({
  currentTheme: themes.green,
  setTheme: () => {},
});
ThemeContext.displayName = "ThemeContext";

export default ThemeContext;
