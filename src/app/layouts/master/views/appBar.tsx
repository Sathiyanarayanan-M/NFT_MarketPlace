import * as React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";

export const AppBar = () => {
  const [showWalletDrawer, setShowWalletDrawer] = React.useState(false);

  const handleWalletDrawer = () => setShowWalletDrawer(!showWalletDrawer);
  return (
    <Mui.AppBar
      position="static"
      color="transparent"
      sx={{ boxShadow: "none" }}
    >
      <Mui.Toolbar
        component={Mui.Stack}
        direction="row"
        justifyContent="space-between"
      >
        <Components.LogoContainer />
        <Mui.Stack direction="row" spacing={1}>
          <Mui.Button component={Router.Link} to="/collections" variant="text">
            Explore Collections
          </Mui.Button>
          <Components.ThemeSwitcher />
          <Mui.IconButton onClick={handleWalletDrawer}>
            <MuiIcons.AccountBalanceWallet />
          </Mui.IconButton>
          <Components.WalletDrawer
            open={showWalletDrawer}
            onClose={handleWalletDrawer}
            anchor="right"
          />
        </Mui.Stack>
      </Mui.Toolbar>
    </Mui.AppBar>
  );
};
