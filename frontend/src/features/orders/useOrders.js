import { useQuery } from "@tanstack/react-query";
import { getOrders as getOrdersApi } from "../../services/apiOrder";
import { useUser } from "../authentication/UserContext";

export default function useOrders() {
  const { user } = useUser();

  const {
    count,
    isLoading,
    data: { data: { orders } = {} } = {},
  } = useQuery({
    queryFn: () => getOrdersApi(),
    queryKey: ["orders", user],
  });

  return { orders, count, isLoading };
}
