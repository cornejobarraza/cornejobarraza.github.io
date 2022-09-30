import { useState, useEffect } from "react";

export { usePixelsAway };

function usePixelsAway() {
  const [pixelsAway, setPixelsAway] = useState(null);

  useEffect(() => {
    const updateDistance = () => {
      // Calculates how many pixels away the scrollbar is from the bottom of the page
      setPixelsAway(document.documentElement.scrollHeight - (window.scrollY + window.innerHeight));
    };
    window.addEventListener("scroll", updateDistance);
    // Resize event to update distance when Chrome's toolbar hides from view
    window.addEventListener("resize", updateDistance);
    return () => {
      window.removeEventListener("scroll", updateDistance);
      window.removeEventListener("resize", updateDistance);
    };
  }, []);

  return pixelsAway;
}
