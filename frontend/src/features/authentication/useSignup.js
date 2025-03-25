import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { handleSetUser } = useUser();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: ({ email, password, passwordConfirm }) =>
      signupApi({ email, password, passwordConfirm }),
    onSuccess: (data) => {
      toast.success("Welcome to Frostbyte!");
      handleSetUser({ ...data.data.user, isAuthenticated: true });
      navigate("/account/profile");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  return { signup, isPending };
}
