import { useMutation } from "@tanstack/react-query";
import { useUser } from "../authentication/UserContext";
import { updateWishlist as updateWishlistApi } from "../../services/apiUser";
import toast from "react-hot-toast";

export function useUpdateWishlist() {
  const { handleSetUser, user } = useUser();
  const { mutate: updateWishlist, isPending } = useMutation({
    mutationFn: (data) => updateWishlistApi(data),
    onSuccess: (data) => {
      handleSetUser({ ...user, wishlist: data.data.user.wishlist });
    },
    onError(err) {
      toast.error(err.message);
    },
  });

  return { updateWishlist, isPending };
}
