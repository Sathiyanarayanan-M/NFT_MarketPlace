import { MoralisProvider } from "react-moralis";
import * as Constants from "src/constants";

export const ReactMoralisProvider = ({ children }: ReactChildren) => {
  return (
    <MoralisProvider
      appId={Constants.Config.MolarisAPiKeys.ApplicationID}
      serverUrl={Constants.Config.MolarisAPiKeys.ServerURL}
    >
      {children}
    </MoralisProvider>
  );
};
