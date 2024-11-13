import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProduct";
import { useParams, useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useProducts() {
  const queryClient = useQueryClient();
  const { category } = useParams();
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  const { isLoading, data: { data: products, count } = {} } = useQuery({
    queryFn: () => getProducts(page, category),
    queryKey: ["products", page, category],
  });

  // Prefetching
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryFn: () => getProducts(page + 1, category),
      queryKey: ["products", category, page + 1],
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryFn: () => getProducts(page - 1, category),
      queryKey: ["products", category, page - 1],
    });
  }

  return { isLoading, products, count };
}
