import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct as createProductApi } from "../../services/apiProduct";
import toast from "react-hot-toast";
import { useModal } from "../../contexts/ModalContext";

export default function useCreateProduct() {
  const queryClient = useQueryClient();
  const { closeModal } = useModal();

  const { mutate: createProduct, isPending } = useMutation({
    mutationFn: (newProduct) => createProductApi(newProduct),
    onSuccess: () => {
      toast.success("Sucessfully created product");
      queryClient.invalidateQueries("products");
      closeModal();
    },
    onError: () => {
      toast.error("There was an error creating this product");
    },
  });

  return { createProduct, isPending };
}
