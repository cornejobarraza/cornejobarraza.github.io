import { useEffect, useRef, useState } from "react";
import { About, Footer, Gallery, LightToggle, Modal } from "components";
import { mainObserver, defaultTheme } from "helpers";
import { usePixelsAway } from "hooks";

function App() {
  const [toggleIcon, setToggleIcon] = useState("moon");
  const [showModal, setShowModal] = useState(true);
  const modalRef = useRef(null);
  const mainRef = useRef(null);
  const toggleRef = useRef(null);
  const pixelsAway = usePixelsAway();

  useEffect(() => {
    mainObserver(toggleRef.current, mainRef.current);
    defaultTheme(toggleRef.current, setToggleIcon, setShowModal);
  }, []);

  useEffect(() => {
    if (pixelsAway < 40) {
      toggleRef.current.style.marginBottom = `${40 - pixelsAway}px`;
    } else {
      toggleRef.current.style.marginBottom = "";
    }
  }, [pixelsAway]);

  const handleLightsOn = () => {
    localStorage.setItem("keepLightMode", "yes");
    toggleRef.current.style.opacity = "1";
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("toggledLight");
    setToggleIcon("moon");
    setShowModal(false);
  };

  const handleLightsOff = () => {
    localStorage.setItem("keepLightMode", "no");
    toggleRef.current.style.opacity = "1";
    setToggleIcon("lightbulb");
    setShowModal(false);
  };

  const handleTheme = () => {
    // Toggle between dark/light mode
    const keepLightMode = localStorage.getItem("keepLightMode");

    if (keepLightMode === "yes" || keepLightMode === "" || keepLightMode === null) {
      localStorage.setItem("keepLightMode", "no");

      setToggleIcon("lightbulb");

      document.documentElement.classList.remove("toggledLight");
      document.documentElement.classList.add("toggledDark");
      document.documentElement.classList.add("dark");
    }

    if (keepLightMode === "no") {
      localStorage.setItem("keepLightMode", "yes");

      setToggleIcon("moon");

      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("toggledDark");
      document.documentElement.classList.add("toggledLight");
    }
  };

  return (
    <div className="Portfolio">
      {showModal && <Modal modalRef={modalRef} lightsOn={handleLightsOn} lightsOff={handleLightsOff} />}
      <main className="row gap-5 justify-content-evenly overflow-hidden mx-auto flex-shrink-0 my-5" ref={mainRef}>
        <About />
        <Gallery />
      </main>
      <footer className="d-flex mt-auto py-2">
        <Footer />
      </footer>
      <LightToggle toggleRef={toggleRef} toggleIcon={toggleIcon} handleTheme={handleTheme} />
    </div>
  );
}

export default App;
