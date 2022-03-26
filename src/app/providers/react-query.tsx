import React from "react";
import * as ReactQuery from "react-query";

export const ReactQueryProvider = ({ children }: ReactChildren) => {
  const queryClient = new ReactQuery.QueryClient();

  return (
    <ReactQuery.QueryClientProvider client={queryClient}>
      {children}
    </ReactQuery.QueryClientProvider>
  );
};
