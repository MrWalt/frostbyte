import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useUser } from "./UserContext";

export function useLogout() {
  const { handleSetUser } = useUser();
  const navigate = useNavigate();

  function logout() {
    handleSetUser({});
    navigate("/login", { replace: true });
    toast.success("Successfully logged out");
  }

  return { logout };
}
