import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import { useUser } from "./UserContext";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { handleSetIsAuth, handleSetUser } = useUser();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.data.user);
      handleSetIsAuth();
      handleSetUser(user.data.user);
      navigate("/account/profile");
    },
    onError: (err) => {
      console.log(err);
      console.log("Incorrect email or password");
    },
  });

  return { login, isPending };
}
