export { defaultTheme };

function defaultTheme() {
  const darkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const keepLightMode = localStorage.getItem("keepLightMode");

  // Element variables
  const modal = document.querySelector("#myModal");
  const html = document.documentElement;
  const lightToggle = document.querySelector("#lightToggle");
  const toggleIcon = document.querySelector("#lightToggle").querySelector("i");

  // Select theme at first landing
  if (darkScheme === true && keepLightMode === null) {
    var myModal = new window.bootstrap.Modal(modal, {
      backdrop: "static",
      keyboard: false,
    });
    myModal.show();
    document.body.style.paddingRight = "0";
    lightToggle.style.opacity = 0;
  }

  // Remember theme
  if (keepLightMode === "yes") {
    html.classList.remove("dark");
    html.classList.remove("toggledDark");
    toggleIcon.classList.remove("fa-toggle-off");
    toggleIcon.classList.add("fa-toggle-on");
  }

  if (keepLightMode === "no") {
    html.classList.remove("toggledLight");
    toggleIcon.classList.remove("fa-toggle-on");
    toggleIcon.classList.add("fa-toggle-off");
  }
}
