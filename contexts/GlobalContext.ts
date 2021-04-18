import React from "react";

type GlobalProviderType = {
  onToggleMenu: () => void;
  isMenuOpen: boolean;
};

const GlobalContext = React.createContext<GlobalProviderType>({
  onToggleMenu: () => {},
  isMenuOpen: false,
});

export const GlobalProvider = GlobalContext.Provider;

export default GlobalContext;
