import { useMutation } from "@tanstack/react-query";
import { useUser } from "./UserContext";
import toast from "react-hot-toast";
import { updatePassword as updatePasswordApi } from "../../services/apiAuth";

export function useUpdatePassword() {
  const { handleSetUser } = useUser();

  const { mutate: updatePassword, isPending } = useMutation({
    mutationFn: (passwordData) => updatePasswordApi(passwordData),
    onSuccess: (data) => {
      handleSetUser({ ...data.data.user, isAuthenticated: true });

      toast.success("Succesfully updated password");
    },
    onError(err) {
      toast.error(err.message);
    },
  });

  return { updatePassword, isPending };
}
