import { useEffect } from "react";
import { Modal, Content, LightToggle } from "components";
import { mainObserver, defaultTheme } from "utils";

function App() {
  useEffect(() => {
    defaultTheme();
    mainObserver();
  }, []);

  const themePreference = localStorage.getItem("keepLightMode");
  const darkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <div className="Portfolio">
      {!themePreference && darkScheme && <Modal />}
      <Content />
      <LightToggle />
    </div>
  );
}

export default App;
