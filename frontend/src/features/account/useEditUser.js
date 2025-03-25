import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editUser as editUserApi } from "../../services/apiUser";
import toast from "react-hot-toast";

export default function useEditUser() {
  const queryClient = useQueryClient();
  const { mutate: editUser, isPending } = useMutation({
    mutationFn: (newUser) => editUserApi(newUser),
    onSuccess: () => {
      toast.success("Successfully edited user");
      queryClient.invalidateQueries("users");
    },
    onError: (err) => toast.error(err.message),
  });

  return { editUser, isPending };
}
