import * as Contexts from "src/app/contexts";

export const Main = ({ children }: ReactChildren) => (
  <Contexts.GlobalLoadingProvider>
    <Contexts.WalletProvider>{children}</Contexts.WalletProvider>
  </Contexts.GlobalLoadingProvider>
);
