import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const MenuContext = createContext();

export default function MenuProvider({ children }) {
  const [toggledMenu, setToggledMenu] = useState("");
  const location = useLocation();

  function handleSetToggledMenu(menu) {
    setToggledMenu(menu);
  }

  function closeMenu() {
    setToggledMenu("");
  }

  useEffect(
    function () {
      closeMenu();
    },
    [location.pathname]
  );

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
