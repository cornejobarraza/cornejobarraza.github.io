import { useEffect } from "react";
import { Content, Footer, LightToggle, Modal } from "components";
import { defaultTheme } from "utils";

function App() {
  useEffect(() => {
    defaultTheme();
  }, []);

  const themePreference = localStorage.getItem("keepLightMode");
  const darkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <div className="Portfolio">
      {!themePreference && darkScheme && <Modal />}
      <Content />
      <Footer />
      <LightToggle />
    </div>
  );
}

export default App;
