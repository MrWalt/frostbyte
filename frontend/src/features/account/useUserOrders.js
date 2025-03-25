import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { getUserOrders as getUserOrdersApi } from "../../services/apiUser";

export default function useUserOrders() {
  const [searchParams] = useSearchParams();
  const { userId } = useParams();
  const page = searchParams.get("page") || 1;

  const { isLoading, data: { data: { orders, count } = {} } = {} } = useQuery({
    queryFn: () => getUserOrdersApi(userId, page),
    queryKey: ["userOrders", page, userId],
  });
  return { orders, count, isLoading };
}
