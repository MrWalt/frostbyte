import { createOrder as createOrderApi } from "../../services/apiOrder";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useCheckoutSession from "./useCheckoutSession";

// export function useCreateOrder() {
//   const navigate = useNavigate();
//   const queryClient = useQueryClient();
//   const { clearCart } = useCart();

//   const { mutate: createOrder, isPending } = useMutation({
//     mutationFn: getCheckoutSession,
//     onSuccess: (data) => {
//       console.log(data);

//       // navigate(`/thank-you?id=${data.data.order.id}`);
//       // navigate(data.session.url);
//       window.location.href = `${data.session.url}`;
//       // return <Redirect exact to={} />;
//       // queryClient.invalidateQueries("orders");
//       // clearCart();
//     },
//     onError: (err) => {
//       toast.error(err.message);
//     },
//   });

//   return { createOrder, isPending };
// }

// Saving this as the above is temporary to check if stripe works

export function useCreateOrder() {
  // const navigate = useNavigate();
  // const queryClient = useQueryClient();
  // const { clearCart } = useCart();
  const { getCheckoutSession } = useCheckoutSession();

  const { mutate: createOrder, isPending } = useMutation({
    mutationFn: (order) => createOrderApi(order),
    onSuccess: (data) => {
      // navigate(`/thank-you?id=${data.data.order.id}`);
      // queryClient.invalidateQueries("orders");
      // clearCart();
      getCheckoutSession(data.data.order.id);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createOrder, isPending };
}
