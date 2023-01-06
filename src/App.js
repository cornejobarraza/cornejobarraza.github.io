import { useEffect } from "react";
import { Modal, Content, Footer, LightToggle } from "components";
import { mainObserver, defaultTheme } from "utils";

function App() {
  useEffect(() => {
    defaultTheme();
    mainObserver();
  }, []);

  const themePreference = localStorage.getItem("keepLightMode");

  return (
    <div className="Portfolio">
      {!themePreference && <Modal />}
      <Content />
      <Footer />
      <LightToggle />
    </div>
  );
}

export default App;
