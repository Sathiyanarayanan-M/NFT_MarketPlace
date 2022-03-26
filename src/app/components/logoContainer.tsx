import * as React from "react";
import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as MuiIcons from "@mui/icons-material";
import * as Contexts from "src/app/contexts";

export const LogoContainer = () => {
  const { darkMode } = React.useContext(Contexts.ThemeContext);

  return (
    <Mui.Stack
      component={Router.Link}
      to="/"
      p={1}
      direction="row"
      spacing={1}
      sx={{ textDecoration: "none" }}
    >
      <MuiIcons.Token
        sx={{
          color: darkMode ? Mui.colors.cyan[500] : Mui.colors.deepPurple[900],
        }}
      />
      <Mui.Typography
        sx={{
          color: darkMode ? Mui.colors.cyan[500] : Mui.colors.deepPurple[900],
        }}
      >
        Web3 NFT
      </Mui.Typography>
    </Mui.Stack>
  );
};
