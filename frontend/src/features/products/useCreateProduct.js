import { useMutation } from "@tanstack/react-query";
import { createProduct as createProductApi } from "../../services/apiProduct";
import toast from "react-hot-toast";

export default function useCreateProduct() {
  const { mutate: createProduct, isPending } = useMutation({
    mutationFn: (newProduct) => createProductApi(newProduct),
    onSuccess: () => {
      toast.success("Sucessfully created product");
    },
    onError: () => {
      toast.error("There was an error creating this product");
    },
  });

  return { createProduct, isPending };
}
