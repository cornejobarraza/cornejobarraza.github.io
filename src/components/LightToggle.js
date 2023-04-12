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

    // Element variables
    const html = document.documentElement;
    const toggleIcon = document.querySelector("#lightToggle").querySelector("i");

    if (keepLightMode === "yes" || keepLightMode === "" || keepLightMode === null) {
      localStorage.setItem("keepLightMode", "no");

      html.classList.remove("toggledLight");
      html.classList.add("toggledDark");
      html.classList.add("dark");
      toggleIcon.classList.remove("fa-toggle-on");
      toggleIcon.classList.add("fa-toggle-off");
    }

    if (keepLightMode === "no") {
      localStorage.setItem("keepLightMode", "yes");

      html.classList.remove("dark");
      html.classList.remove("toggledDark");
      html.classList.add("toggledLight");
      toggleIcon.classList.remove("fa-toggle-off");
      toggleIcon.classList.add("fa-toggle-on");
    }
  };

  return (
    <button
      id="lightToggle"
      className="btn btn-sm"
      aria-label="Dark/light mode toggle"
      onClick={handleTheme}
      ref={toggleRef}
    >
      <i className="fa-solid fa-toggle-off"></i>
    </button>
  );
}
