export { defaultTheme };

function defaultTheme() {
  const darkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const keepLightMode = localStorage.getItem("keepLightMode");
  const modal = document.querySelector("#myModal");

  // Select theme at first landing
  if (darkScheme === true && keepLightMode === null) {
    var myModal = new window.bootstrap.Modal(modal, {
      backdrop: "static",
      keyboard: false,
    });
    myModal.show();
    document.body.style.paddingRight = "0";
    document.querySelector(".lightToggle").style.opacity = 0;
  }

  // Remember theme
  if (keepLightMode === "yes") {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.remove("toggledDark");
  }
  if (keepLightMode === "no") {
    document.documentElement.classList.remove("toggledLight");
  }
}
