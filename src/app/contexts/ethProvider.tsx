import * as Ethers from "ethers";

export const useEthProvider = () => {
  const ethereum = (window as any).ethereum;
  const provider = new Ethers.providers.Web3Provider(ethereum);
  return provider;
};
