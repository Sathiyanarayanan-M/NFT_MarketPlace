import * as React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Contexts from "src/app/contexts";

export const ThemeSwitcher = () => {
  const { darkMode, changeMode } = React.useContext(Contexts.ThemeContext);

  return (
    <Mui.IconButton onClick={changeMode}>
      {darkMode ? (
        <MuiIcons.DarkMode />
      ) : (
        <MuiIcons.Brightness7 sx={{ color: Mui.colors.yellow[700] }} />
      )}
    </Mui.IconButton>
  );
};
