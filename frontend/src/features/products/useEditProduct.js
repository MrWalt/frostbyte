import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProduct as editProductApi } from "../../services/apiProduct";
import toast from "react-hot-toast";
import { useModal } from "../../contexts/ModalContext";

export default function useEditProduct() {
  const { closeModal } = useModal();
  const queryClient = useQueryClient();
  const { mutate: editProduct, isPending } = useMutation({
    mutationFn: (updatedProduct) => editProductApi(updatedProduct),
    onSuccess: () => {
      toast.success("Successfully updated product");
      queryClient.invalidateQueries(["product"]);
      closeModal();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { editProduct, isPending };
}
