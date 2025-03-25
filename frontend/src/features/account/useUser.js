import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getUser as getUserApi } from "../../services/apiUser";

export default function useUser() {
  const { userId } = useParams();

  const { data: { data: user } = {}, isLoading } = useQuery({
    queryFn: () => getUserApi(userId),
    queryKey: ["userToEdit", userId],
  });

  return { user, isLoading };
}
