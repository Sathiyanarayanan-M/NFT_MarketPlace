import * as Ethers from "ethers";

export const useWalledConnection: IWalletInteractions.UseWalletConnection =
  async (method) => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method,
        });

        const provider = new Ethers.ethers.providers.Web3Provider(
          window.ethereum
        );
        const balance = await provider.getBalance(addressArray[0]);
        const formattedBalance = Ethers.ethers.utils.formatEther(balance);

        return {
          err: false,
          address: addressArray[0],
          balance: formattedBalance,
          status: "Wallet Connected",
        };
      } catch (err: any) {
        return {
          err: true,
          address: "",
          balance: "",
          status: "😥 " + err.message,
        };
      }
    } else {
      if (method === "eth_accounts") {
        return {
          err: false,
          address: "",
          balance: "",
          status: "wallet Not connected",
        };
      } else {
        window.open("https://metamask.io/download", "_blank");
      }
    }
  };

export const disconnectWallet = async () => {
  try {
    const status = await window.ethereum.request({
      method: "wallet_requestPermissions",
      params: [
        {
          eth_accounts: {},
        },
      ],
    });
    return {
      err: false,
      address: "",
      status: "wallet Not connected",
    };
  } catch (e: any) {
    return {
      err: true,
      address: "",
      status: "😥 " + e.message,
    };
  }
};

export const addWalletListener: IWalletInteractions.AddWalletListner = (
  handleSetStatus,
  handleSetAddress
) => {
  if (window.ethereum) {
    window.ethereum.on("accountsChanged", (accounts: string) => {
      if (accounts.length > 0) {
        handleSetAddress(accounts[0]);
        handleSetStatus("👆🏽 Write a message in the text-field above.");
      } else {
        handleSetAddress("");
        handleSetStatus("🦊 Connect to Metamask using the top right button.");
      }
    });
  } else {
    handleSetStatus("Not Installed");
  }
};

export namespace IWalletInteractions {
  export type AddWalletListner = (
    arg0: HandleSetStatus,
    arg1: HandleSetAddress
  ) => void;

  export type HandleSetStatus = (status: string) => void;
  export type HandleSetAddress = (address: string) => void;

  export type UseWalletConnection = (
    method: "eth_requestAccounts" | "eth_accounts"
  ) => Promise<
    | {
        err: boolean;
        address: string | null;
        balance: string | null;
        status: string;
      }
    | undefined
  >;
}
