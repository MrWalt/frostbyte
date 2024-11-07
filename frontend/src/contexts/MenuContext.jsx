import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export default function MenuProvider({ children }) {
  const [toggledMenu, setToggledMenu] = useState("");

  function handleSetToggledMenu(menu) {
    setToggledMenu(menu);
  }

  function closeMenu() {
    setToggledMenu("");
  }

  return (
    <MenuContext.Provider
      value={{ toggledMenu, handleSetToggledMenu, closeMenu }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) throw new Error("Menu Context was used outside of provider");

  return context;
}
