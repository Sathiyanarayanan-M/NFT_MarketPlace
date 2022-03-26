import React from "react";

export const WalletContext = React.createContext<Wallet.Context>({
  wallet: null,
  setWallet: () => {},
});

export const WalletProvider = ({ children }: ReactChildren) => {
  const [wallet, setWallet] = React.useState<Wallet.WalletState>(null);

  const handleAddWallet = (wallet: Wallet.WalletState) => {
    setWallet(wallet);
  };

  return (
    <WalletContext.Provider value={{ wallet, setWallet: handleAddWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export namespace Wallet {
  export interface Context {
    wallet: WalletObj | null;
    setWallet: (wallet: WalletObj) => void;
  }

  export type WalletState = WalletObj | null;
  interface WalletObj {
    address?: string | null;
    balance?: string | null;
  }
}
