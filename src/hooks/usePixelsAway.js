import { useState, useEffect } from "react";

export { usePixelsAway };

function usePixelsAway() {
  const [pixelsAway, setPixelsAway] = useState(null);

  useEffect(() => {
    const updateDistance = () => {
      setPixelsAway(document.documentElement.scrollHeight - (window.scrollY + window.innerHeight));
    };
    window.addEventListener("scroll", updateDistance);
    return () => window.removeEventListener("scroll", updateDistance);
  }, []);

  return pixelsAway;
}
