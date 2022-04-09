import React from "react";
import * as Mui from "@mui/material";
import * as Moralis from "react-moralis";
// import * as Hooks from "src/app/hooks";
import * as Contexts from "src/app/contexts";
import * as Constants from "src/constants";

export const WalletDrawer = (props: Mui.DrawerProps) => {
  // const { wallet, setWallet } = React.useContext(Contexts.WalletContext);
  const { isAuthenticated, isAuthenticating, account } = Moralis.useMoralis();
  // console.log(isAuthenticated, account, isAuthenticating);
  // React.useEffect(() => {
  //   Hooks.WalletInteractions.useWalledConnection("eth_accounts").then(
  //     (result) => {
  //       setWallet({
  //         address: result?.address,
  //         balance: result?.balance,
  //       });
  //     }
  //   );
  // }, []);

  console.log(Constants.Config);

  return (
    <Mui.Drawer {...props}>
      <Mui.Box width={500} px={2} py={4}>
        <Mui.Stack direction="row" alignItems="center" spacing={2}>
          <Mui.Typography variant="h6">My Wallet </Mui.Typography>
        </Mui.Stack>
        <Mui.Stack alignItems="center" justifyContent="center" pt={3}>
          {isAuthenticating ? (
            <Mui.CircularProgress sx={{ m: 0 }} />
          ) : isAuthenticated ? (
            <ConnectedContainer />
          ) : (
            <NotConnectedContainer />
          )}
        </Mui.Stack>
      </Mui.Box>
    </Mui.Drawer>
  );
};

const ConnectedContainer = () => {
  const { logout, account } = Moralis.useMoralis();
  const { data: balance } = Moralis.useNativeBalance();
  const HandleLogout = async () => {
    await logout();
  };

  return (
    <Mui.Box>
      <Mui.Typography>Your wallet address is: {account}</Mui.Typography>
      <Mui.Typography>
        Your wallet balance is: {balance.formatted}
      </Mui.Typography>
      <Mui.Button onClick={HandleLogout} sx={{ mt: 2 }}>
        Logout
      </Mui.Button>
    </Mui.Box>
  );
};

const NotConnectedContainer = () => {
  const { setWallet } = React.useContext(Contexts.WalletContext);

  const { authenticate } = Moralis.useMoralis();

  const handleConnectWallet = async () => {
    await authenticate({ signingMessage: "Log in using Moralis" })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user?.get("ethAddress"));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Mui.Typography py={2}>
        Connect with one of our available wallet providers or create a new one.
      </Mui.Typography>
      <Mui.Stack sx={{ width: "100%" }}>
        <Mui.List>
          <Mui.ListItem disablePadding>
            <Mui.ListItemButton
              sx={{
                borderRadius: 5,
                border: "1px solid black",
                transition: "transform .8s",
                ":hover": {
                  backgroundColor: "gray.100",
                  transform: "scale(1.02)",
                },
              }}
              onClick={handleConnectWallet}
            >
              <Mui.ListItemIcon>
                <img
                  src="https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg"
                  height={30}
                  width={30}
                />
              </Mui.ListItemIcon>
              <Mui.ListItemText
                primary="MetaMask"
                secondary="Popular"
                secondaryTypographyProps={{ color: Mui.colors.grey[500] }}
              />
            </Mui.ListItemButton>
          </Mui.ListItem>
        </Mui.List>
      </Mui.Stack>
    </>
  );
};
