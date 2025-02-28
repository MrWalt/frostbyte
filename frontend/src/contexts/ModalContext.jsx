import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [toggledModal, setToggledModal] = useState("");

  function handleSetToggledModal(modal) {
    setToggledModal(modal);
  }

  function closeModal() {
    setToggledModal("");
  }

  return (
    <ModalContext.Provider
      value={{ toggledModal, handleSetToggledModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Modal Context was used outside of provider");

  return context;
}
