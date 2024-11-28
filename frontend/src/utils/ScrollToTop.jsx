import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ children }) {
  const location = useLocation();

  useEffect(
    function () {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
    [location]
  );
  return <>{children}</>;
}
