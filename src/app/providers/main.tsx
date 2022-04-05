import * as Providers from "src/app/providers";

export const Main = ({ children }: ReactChildren) => (
  <Providers.ReactQueryProvider>
    <Providers.ReactMoralisProvider>{children}</Providers.ReactMoralisProvider>
  </Providers.ReactQueryProvider>
);
