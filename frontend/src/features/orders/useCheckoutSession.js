import { useMutation } from "@tanstack/react-query";
import { getCheckoutSession as getCheckoutSessionApi } from "../../services/apiOrder";

export default function useCheckoutSession() {
  const { mutate: getCheckoutSession, isPending } = useMutation({
    mutationFn: (id) => getCheckoutSessionApi(id),
    onSuccess: (data) => {
      window.location.href = data.session.url;
    },
  });

  return { getCheckoutSession, isPending };
}
