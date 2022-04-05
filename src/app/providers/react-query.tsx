import React from "react";
import * as ReactQuery from "react-query";

export const ReactQueryProvider = ({ children }: ReactChildren) => {
  const queryClient = new ReactQuery.QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 30000,
      },
    },
  });

  return (
    <ReactQuery.QueryClientProvider client={queryClient}>
      {children}
    </ReactQuery.QueryClientProvider>
  );
};
