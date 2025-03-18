import { createOrder as createOrderApi } from "../../services/apiOrder";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useCart } from "../cart/CartContext";
import { useNavigate } from "react-router-dom";

export function useCreateOrder() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { clearCart } = useCart();

  const { mutate: createOrder, isPending } = useMutation({
    mutationFn: (order) => createOrderApi(order),
    onSuccess: () => {
      navigate("/thank-you");
      queryClient.invalidateQueries("orders");
      clearCart();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createOrder, isPending };
}
