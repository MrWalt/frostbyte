import { useQuery } from "@tanstack/react-query";
import { getOrders as getOrdersApi } from "../../services/apiOrder";
import { useUser } from "../authentication/UserContext";

export default function useOrders() {
  const { user } = useUser();

  const {
    data: { data: orders } = {},
    count,
    isLoading,
  } = useQuery({
    queryFn: () => getOrdersApi(user.id),
    queryKey: ["orders", user],
  });

  return { orders, count, isLoading };
}
