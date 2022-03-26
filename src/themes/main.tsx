import * as Mui from "@mui/material";
import React from "react";
import * as Themes from "src/themes";
import * as Contexts from "src/app/contexts";
import * as Constants from "src/constants";

export const Main = ({ children }: Main.Props) => {
  const [darkMode, setDarkMode] = React.useState(
    localStorage.getItem("theme") === "dark"
  );

  const changeMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", darkMode ? "light" : "dark");
  };

  const theme = Mui.createTheme({
    ...Themes.Global.Shared(),
  });

  const darkTheme = Mui.createTheme({
    ...theme,
    palette: {
      mode: "dark",
      primary: { ...theme.palette.primary, main: Mui.colors.cyan[500] },
      text: { ...theme.palette.text, primary: "#fff" },
    },
  });

  const currentTheme = darkMode ? darkTheme : theme;

  return (
    <Contexts.ThemeContext.Provider value={{ darkMode, changeMode }}>
      <Mui.ThemeProvider theme={currentTheme}>
        <Themes.CssBaseline.Main />
        {children || null}
      </Mui.ThemeProvider>
    </Contexts.ThemeContext.Provider>
  );
};

export declare namespace Main {
  export interface Props {
    children?: React.ReactNode;
  }
}
