import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProduct";

export function useProducts() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryFn: getProducts,
    queryKey: ["products"],
  });

  return { isLoading, products, error };
}
