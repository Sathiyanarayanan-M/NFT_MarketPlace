import React from "react";

export const LoadingContext = React.createContext<LoadingContextProps.Context>({
  isLoading: false,
  setIsLoading: () => {},
});

export const GlobalLoadingProvider = ({ children }: ReactChildren) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading: handleLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export namespace LoadingContextProps {
  export interface Context {
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
  }
}
