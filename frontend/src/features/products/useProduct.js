import { useQuery } from "@tanstack/react-query";
import { getProduct as getProductApi } from "../../services/apiProduct";
import { useParams } from "react-router-dom";

export default function useProduct() {
  const { id: productId } = useParams();

  const { data: { data: product } = {}, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductApi(productId),
    retry: false,
  });

  return { product, isLoading };
}
