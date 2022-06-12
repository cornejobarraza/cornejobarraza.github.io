let goodNight = () => {
  // HTML elements
  const moon = '<i class="fa-solid fa-moon"></i>';
  const lightbulb = '<i class="fa-solid fa-lightbulb"></i>';
  const lightSwitch = document.getElementById("lightToggle");

  // Remember theme
  if (prefersLight === "yes") {
    lightSwitch.removeChild(lightSwitch.firstElementChild);
    lightSwitch.insertAdjacentHTML("afterbegin", moon);

    document.documentElement.classList.remove("dark");
    document.documentElement.classList.remove("toggledDark");
  }

  if (prefersLight === "no") {
    lightSwitch.removeChild(lightSwitch.firstElementChild);
    lightSwitch.insertAdjacentHTML("afterbegin", lightbulb);

    document.documentElement.classList.remove("toggledLight");
  }

  // Function to set theme during modal
  const keepOn = document.getElementById("lightsOff");
  const keepOff = document.getElementById("lightsOn");

  function defaultTheme() {
    if (prefersLight === null) {
      var myModal = new bootstrap.Modal(document.getElementById("myModal"), {
        backdrop: "static",
        keyboard: false,
      });

      myModal.show();
      document.body.style.paddingRight = "0";

      keepOn.addEventListener("click", () => {
        localStorage.setItem("keepLightMode", "no");
      });

      keepOff.addEventListener("click", () => {
        localStorage.setItem("keepLightMode", "yes");

        lightSwitch.removeChild(lightSwitch.firstElementChild);
        lightSwitch.insertAdjacentHTML("afterbegin", moon);

        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("toggledLight");
      });
    }
  }

  defaultTheme();

  // Button event to toggle between dark/light mode
  lightSwitch.addEventListener("click", () => {
    prefersLight = localStorage.getItem("keepLightMode");

    if (prefersLight === "yes") {
      localStorage.setItem("keepLightMode", "no");

      lightSwitch.removeChild(lightSwitch.firstElementChild);
      lightSwitch.insertAdjacentHTML("afterbegin", lightbulb);

      document.documentElement.classList.remove("toggledLight");
      document.documentElement.classList.add("toggledDark");
      document.documentElement.classList.add("dark");
    }

    if (prefersLight === "no") {
      localStorage.setItem("keepLightMode", "yes");

      lightSwitch.removeChild(lightSwitch.firstElementChild);
      lightSwitch.insertAdjacentHTML("afterbegin", moon);

      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("toggledDark");
      document.documentElement.classList.add("toggledLight");
    }
  });
};
