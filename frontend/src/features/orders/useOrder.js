import { useQuery } from "@tanstack/react-query";
import { getOrder as getOrderApi } from "../../services/apiOrder";
import { useUser } from "../authentication/UserContext";
import { useParams } from "react-router-dom";

export default function useOrder() {
  const { orderId } = useParams();
  const { user } = useUser();

  const { data: { data: order } = {}, isLoading } = useQuery({
    queryFn: () => getOrderApi(orderId),
    queryKey: ["order", user, orderId],
  });

  return { order, isLoading };
}
