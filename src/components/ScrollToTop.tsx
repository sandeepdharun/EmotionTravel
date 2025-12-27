
import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    // Disable smooth scroll temporarily for instant reset
    document.documentElement.style.scrollBehavior = "auto";
    
    // Force scroll to top
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // Re-enable smooth scroll after a frame
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = "";
    });
  }, [pathname, search]);

  return null;
};