import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleSetUser(user) {
    setUser(user);
  }

  function handleSetIsAuth() {
    setIsAuthenticated(true);
  }

  return (
    <UserContext.Provider
      value={{ user, handleSetUser, isAuthenticated, handleSetIsAuth }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) throw new Error("Context was used outside of User Context");
  return context;
}
