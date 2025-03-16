import { useQuery } from "@tanstack/react-query";
import { getOrders as getOrdersApi } from "../../services/apiOrder";
import { useUser } from "../authentication/UserContext";
import { useSearchParams } from "react-router-dom";

export default function useOrders() {
  const { user } = useUser();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const { isLoading, data: { data: orders, count } = {} } = useQuery({
    queryFn: () => getOrdersApi(page),
    queryKey: ["orders", user, page],
  });

  return { isLoading, orders, count };
}
