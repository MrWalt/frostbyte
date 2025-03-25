import { useMutation, useQueryClient } from "@tanstack/react-query";
import { refundOrder as refundOrderApi } from "../../services/apiOrder";
import toast from "react-hot-toast";

export default function useRefundOrder() {
  const queryClient = useQueryClient();
  const { mutate: refundOrder, isPending } = useMutation({
    mutationFn: (id) => refundOrderApi(id),
    onSuccess: () => {
      toast.success("Order was refunded");
      queryClient.invalidateQueries("order");
      queryClient.invalidateQueries("orders");
    },
  });

  return { refundOrder, isPending };
}
