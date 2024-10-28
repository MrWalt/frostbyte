import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/login", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  if (isAuthenticated) return children;
}
