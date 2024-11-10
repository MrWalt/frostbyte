import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/UserContext";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(
    function () {
      if (!user.isAuthenticated) navigate("/login", { replace: true });
    },
    [user.isAuthenticated, navigate]
  );

  if (user.isAuthenticated) return children;
}
