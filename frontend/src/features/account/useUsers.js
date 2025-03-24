import { useQuery } from "@tanstack/react-query";
import { getUsers as getUsersApi } from "../../services/apiUser";
import { useSearchParams } from "react-router-dom";

export default function useUsers() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || null;
  const page = searchParams.get("page") || 1;
  const { data: { data: users, count } = {}, isLoading } = useQuery({
    queryFn: () => getUsersApi(page, searchQuery),
    queryKey: ["users", searchQuery, page],
  });
  return { users, isLoading, count };
}
