import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProduct";

export function useProducts() {
  const { isLoading, data: products } = useQuery({
    queryFn: getProducts,
    queryKey: ["products"],
  });

  return { isLoading, products };
}
