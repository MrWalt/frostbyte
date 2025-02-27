import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProduct";
import { useParams, useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useProducts() {
  const queryClient = useQueryClient();
  const { category } = useParams();
  const [searchParams] = useSearchParams();

  const filter = {};
  filter.manufacturer = searchParams.get("manufacturer") || null;
  filter.stockOnly = searchParams.get("stock") || null;
  filter.price = {
    min: searchParams.get("minPrice") || null,
    max: searchParams.get("maxPrice") || null,
  };
  const sortBy = searchParams.get("sort") || null;

  const page = Number(searchParams.get("page")) || 1;

  const { isLoading, data: { data: products, count, brands } = {} } = useQuery({
    queryFn: () => getProducts(page, category, filter, sortBy),
    queryKey: [
      "products",
      page,
      category,
      filter.manufacturer,
      filter.stockOnly,
      filter.price,
      sortBy,
    ],
  });

  // Prefetching
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryFn: () => getProducts(page + 1, category, filter, sortBy),
      queryKey: [
        "products",
        page + 1,
        category,
        filter.manufacturer,
        filter.stockOnly,
        filter.price,
        sortBy,
      ],
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryFn: () => getProducts(page - 1, category, filter, sortBy),
      queryKey: [
        "products",
        page - 1,
        category,
        filter.manufacturer,
        filter.stockOnly,
        filter.price,
        sortBy,
      ],
    });
  }

  return { isLoading, products, count, brands };
}
