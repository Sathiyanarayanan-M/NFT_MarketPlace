import * as Contexts from "src/app/contexts";

export const Main = ({ children }: ReactChildren) => (
  <Contexts.WalletProvider>{children}</Contexts.WalletProvider>
);
