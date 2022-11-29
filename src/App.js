import { useEffect } from "react";
import { About, Footer, Gallery, LightToggle, Modal } from "components";
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
      <main className="row gap-5 justify-content-evenly overflow-hidden mx-auto flex-shrink-0 my-5">
        <About />
        <Gallery />
      </main>
      <footer className="d-flex mt-auto py-2">
        <Footer />
      </footer>
      <LightToggle />
    </div>
  );
}

export default App;
