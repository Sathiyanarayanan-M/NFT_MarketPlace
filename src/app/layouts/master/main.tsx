import * as React from "react";
import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";
import * as Contexts from "src/app/contexts";
import * as Constants from "src/constants";

export const Main = () => {
  const { darkMode } = React.useContext(Contexts.ThemeContext);
  const { isLoading } = React.useContext(Contexts.LoadingContext);
  return (
    <Mui.Box
      sx={{
        background: darkMode
          ? Constants.Colors.Gradient.darkBlue("top")
          : Constants.Colors.Gradient.coolSky("top"),
        minHeight: "100vh",
      }}
    >
      {isLoading && (
        <Mui.LinearProgress
          style={{ position: "absolute", top: 0, width: "100vw" }}
        />
      )}
      <Mui.Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      />
      <Layouts.Master.Views.AppBar />
      <Mui.Box p={2}>
        <Router.Outlet />
      </Mui.Box>
    </Mui.Box>
  );
};
