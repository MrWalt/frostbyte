import { createContext, useContext, useEffect, useState } from "react";
import { isLoggedin } from "../../services/apiAuth";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});

  // Checking to see if the user is logged in
  useEffect(function () {
    async function persistLogin() {
      const data = await isLoggedin();

      if (data.status === "success") {
        setUser({ ...data.data, isAuthenticated: true });
        return;
      }

      setUser({});
    }

    persistLogin();
  }, []);

  function handleSetUser(loggedInUser) {
    setUser(loggedInUser);
  }

  return (
    <UserContext.Provider value={{ user, handleSetUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) throw new Error("Context was used outside of User Context");
  return context;
}
