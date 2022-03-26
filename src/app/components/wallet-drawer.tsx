import React from "react";
import * as Mui from "@mui/material";
import * as Hooks from "src/app/hooks";
import * as Contexts from "src/app/contexts";

export const WalletDrawer = (props: Mui.DrawerProps) => {
  const [status, setStatus] = React.useState<string | undefined>("");
  const { wallet, setWallet } = React.useContext(Contexts.WalletContext);

  React.useEffect(() => {
    Hooks.WalletInteractions.useWalledConnection("eth_accounts").then(
      (result) => {
        setWallet({
          address: result?.address,
          balance: result?.balance,
        });
        setStatus(result?.status);
      }
    );
  }, []);

  console.log(wallet);

  return (
    <Mui.Drawer {...props}>
      <Mui.Box width={500} px={2} py={4}>
        <Mui.Stack direction="row" alignItems="center" spacing={2}>
          <Mui.Typography variant="h6">My Wallet </Mui.Typography>
        </Mui.Stack>
        {wallet?.address ? <ConnectedContainer /> : <NotConnectedContainer />}
      </Mui.Box>
    </Mui.Drawer>
  );
};

const ConnectedContainer = () => {
  const { wallet, setWallet } = React.useContext(Contexts.WalletContext);

  return (
    <Mui.Box>
      <Mui.Typography>Your wallet address is: {wallet?.address}</Mui.Typography>
      <Mui.Typography>Your wallet balance is: {wallet?.balance}</Mui.Typography>
    </Mui.Box>
  );
};

const NotConnectedContainer = () => {
  const { setWallet } = React.useContext(Contexts.WalletContext);

  const handleConnectWallet = () => {
    Hooks.WalletInteractions.useWalledConnection("eth_requestAccounts").then(
      (result) => {
        setWallet({
          address: result?.address,
          balance: result?.balance,
        });
      }
    );
  };

  return (
    <>
      <Mui.Typography py={2}>
        Connect with one of our available wallet providers or create a new one.
      </Mui.Typography>
      <Mui.Stack>
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
