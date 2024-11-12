import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/apiProduct";
import { useParams } from "react-router-dom";

export default function useProduct() {
  const { id: productId } = useParams();

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
    retry: false,
  });

  return { product, isLoading };
}
