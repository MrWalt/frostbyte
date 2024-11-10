import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import { useUser } from "./UserContext";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const { handleSetUser } = useUser();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      handleSetUser({ ...user.data.user, isAuthenticated: true });
      navigate("/account/profile");
      toast.success("Successfully logged in");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { login, isPending };
}
