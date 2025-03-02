import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProduct as editProductApi } from "../../services/apiProduct";
import toast from "react-hot-toast";

export default function useEditProduct() {
  const queryClient = useQueryClient();
  const { mutate: editProduct, isPending } = useMutation({
    mutationFn: (updatedProduct) => editProductApi(updatedProduct),
    onSuccess: () => {
      toast.success("Successfully updated product");
      queryClient.invalidateQueries(["product"]);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { editProduct, isPending };
}
