import { useEffect, useRef } from "react";

export default function useOutsideMenuClick(
  handler,
  menuName,
  listenCapturing = true
) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (
          ref.current &&
          !e.target.classList.contains("open") &&
          !ref.current.contains(e.target) &&
          !e.target.closest("button")?.classList.contains(menuName)
        ) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing, menuName]
  );

  return ref;
}
