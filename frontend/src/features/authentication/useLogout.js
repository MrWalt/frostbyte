import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

export function useLogout() {
  const { handleSetUser, handleSetIsAuth } = useUser();
  const navigate = useNavigate();

  function logout() {
    handleSetIsAuth(false);
    handleSetUser({});
    navigate("/login", { replace: true });
  }

  return { logout };
}
