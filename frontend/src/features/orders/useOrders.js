import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getOrders as getOrdersApi } from "../../services/apiOrder";
import { useUser } from "../authentication/UserContext";
import { useSearchParams } from "react-router-dom";
import { ORDERS_PAGE_SIZE } from "../../utils/constants";

export default function useOrders() {
  const { user } = useUser();
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);

  const { isLoading, data: { data: orders, count } = {} } = useQuery({
    queryFn: () => getOrdersApi(page),
    queryKey: ["orders", user, page],
  });

  // Prefetching
  const pageCount = Math.ceil(count / ORDERS_PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryFn: () => getOrdersApi(page + 1),
      queryKey: ["orders", user, page + 1],
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryFn: () => getOrdersApi(page - 1),
      queryKey: ["orders", user, page - 1],
    });

  return { isLoading, orders, count };
}
