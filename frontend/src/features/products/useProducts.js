import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProduct";
import { useParams, useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useProducts() {
  const queryClient = useQueryClient();
  const { category } = useParams();
  const [searchParams] = useSearchParams();

  const filter = {
    manufacturer: searchParams.get("manufacturer") || null,
    stock: searchParams.get("stock") || null,
    minPrice: searchParams.get("minPrice") || null,
    maxPrice: searchParams.get("maxPrice") || null,
    socket: searchParams.get("socket") || null,
    capacity: searchParams.get("capacity") || null,
    type: searchParams.get("type") || null,
  };

  const sortBy = searchParams.get("sort") || null;

  const page = Number(searchParams.get("page")) || 1;

  const { isLoading, data: { data: products, count, filters } = {} } = useQuery(
    {
      queryFn: () => getProducts(page, category, filter, sortBy),
      queryKey: ["products", page, category, filter, sortBy],
    }
  );

  // Prefetching
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryFn: () => getProducts(page + 1, category, filter, sortBy),
      queryKey: ["products", page + 1, category, filter, sortBy],
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryFn: () => getProducts(page - 1, category, filter, sortBy),
      queryKey: ["products", page - 1, category, filter, sortBy],
    });
  }

  return { isLoading, products, count, filters };
}
