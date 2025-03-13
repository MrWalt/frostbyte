import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct as deleteProductApi } from "../../services/apiProduct";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useModal } from "../../contexts/ModalContext";

export default function useDeleteProduct() {
  const { closeModal } = useModal();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id } = useParams();

  const { mutate: deleteProduct, isPending } = useMutation({
    mutationFn: () => deleteProductApi(id),
    onSuccess: () => {
      toast.success("Successfully deleted product");
      navigate("/products");
      closeModal();

      // Have to use setTimeout otherwise these is an unneccessary request for product leading to 404 and error in console
      setTimeout(function () {
        queryClient.invalidateQueries(["products"]);
        queryClient.invalidateQueries(["product"]);
      }, 0);
    },
  });

  return { deleteProduct, isPending };
}
