import { useMutation } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../../services/apiUser";
import { useUser } from "./UserContext";
import toast from "react-hot-toast";

export function useUpdateUser() {
  //   const navigate = useNavigate();
  const { handleSetUser } = useUser();

  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: (user) => updateUserApi(user),
    onSuccess: (data) => {
      handleSetUser({ ...data.data.user, isAuthenticated: true });
      //   navigate("/account/profile");
      toast.success(`Successfully updated data`);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateUser, isPending };
}
