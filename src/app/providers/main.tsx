import * as React from "react";
import * as Providers from "src/app/providers";

export const Main = ({ children }: ReactChildren) => (
  <Providers.ReactQueryProvider>{children}</Providers.ReactQueryProvider>
);
