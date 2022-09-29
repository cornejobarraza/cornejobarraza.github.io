export { defaultTheme };

function defaultTheme(toggle, setToggleIcon, setShowModal) {
  const darkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const keepLightMode = localStorage.getItem("keepLightMode");
  const modal = document.querySelector(".modal");

  // Select theme at first landing
  if ((darkScheme === true && keepLightMode === null) || keepLightMode === "") {
    var myModal = new window.bootstrap.Modal(modal, {
      backdrop: "static",
      keyboard: false,
    });
    myModal.show();
    document.body.style.paddingRight = "0";
    toggle.style.opacity = "0";
  }

  // Remember theme
  if (keepLightMode !== null) setShowModal(false);
  if (keepLightMode === "yes") {
    setToggleIcon("moon");

    document.documentElement.classList.remove("dark");
    document.documentElement.classList.remove("toggledDark");
  }
  if (keepLightMode === "no") {
    setToggleIcon("lightbulb");

    document.documentElement.classList.remove("toggledLight");
  }
}
