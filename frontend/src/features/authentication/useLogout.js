import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useUser } from "./UserContext";
import { logout as logoutApi } from "../../services/apiAuth";
import { useMutation } from "@tanstack/react-query";

// export function useLogout() {
//   const { handleSetUser } = useUser();
//   const navigate = useNavigate();

//   async function logout() {
//     handleSetUser({});
//     navigate("/login", { replace: true });
//     toast.success("Successfully logged out");
//   }

//   return { logout };
// }

export function useLogout() {
  const navigate = useNavigate();
  const { handleSetUser } = useUser();

  const { mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      handleSetUser({});
      navigate("/login");
      toast.success("Successfully logged out");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { logout };
}
