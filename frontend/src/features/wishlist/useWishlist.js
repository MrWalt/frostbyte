import { useQuery } from "@tanstack/react-query";
import { getWishlist as getWishlistApi } from "../../services/apiUser";
import { useUser } from "../authentication/UserContext";

export function useWishlist() {
  const { user } = useUser();
  const { isLoading, data: { data: { wishlist } = {} } = {} } = useQuery({
    queryFn: () => getWishlistApi(),
    queryKey: ["wishlist", user.wishlist],
  });

  return { wishlist, isLoading };
}
