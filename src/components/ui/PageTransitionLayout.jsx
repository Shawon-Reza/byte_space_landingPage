import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";

export default function PageTransitionLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return <Outlet />;
}