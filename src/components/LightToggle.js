import { useEffect, useRef } from "react";
import { usePixelsAway } from "hooks";

export { LightToggle };

function LightToggle() {
  const toggleRef = useRef(null);
  const pixelsAway = usePixelsAway();

  useEffect(() => {
    if (pixelsAway < 40) {
      toggleRef.current.style.marginBottom = `${40 - pixelsAway}px`;
    } else {
      toggleRef.current.style.marginBottom = "";
    }
  }, [pixelsAway]);

  const handleTheme = () => {
    // Toggle between dark/light mode
    const keepLightMode = localStorage.getItem("keepLightMode");

    if (keepLightMode === "yes" || keepLightMode === "" || keepLightMode === null) {
      localStorage.setItem("keepLightMode", "no");

      document.documentElement.classList.remove("toggledLight");
      document.documentElement.classList.add("toggledDark");
      document.documentElement.classList.add("dark");
    }

    if (keepLightMode === "no") {
      localStorage.setItem("keepLightMode", "yes");

      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("toggledDark");
      document.documentElement.classList.add("toggledLight");
    }
  };

  return (
    <button
      className="lightToggle btn btn-sm"
      aria-label="Dark/light mode toggle"
      onClick={handleTheme}
      ref={toggleRef}
    >
      <i className="fa-solid fa-cloud-sun"></i>
    </button>
  );
}
