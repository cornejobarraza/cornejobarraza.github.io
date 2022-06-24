import { Injectable } from "@angular/core";
declare var window: any;

@Injectable({
  providedIn: "root",
})
export class GoodnightService {
  constructor() {}

  get keepLights() {
    return localStorage.getItem("keepLightMode");
  }

  get prefersDark() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  get html() {
    return document.documentElement;
  }

  get body() {
    return document.body;
  }

  get modal() {
    return document.querySelector("#myModal") as HTMLElement;
  }

  get lightsOff() {
    return document.querySelector("#lightsOff") as HTMLElement;
  }

  get lightsOn() {
    return document.querySelector("#lightsOn") as HTMLElement;
  }

  get lightSwitch() {
    return document.querySelector("#lightToggle") as HTMLElement;
  }

  get icon() {
    return this.lightSwitch.querySelector("i") as Node;
  }

  get moon() {
    return '<i class="fa-solid fa-moon"></i>';
  }

  get lightbulb() {
    return '<i class="fa-solid fa-lightbulb"></i>';
  }

  defaultTheme() {
    // Select theme at first landing
    if (this.keepLights === null && this.prefersDark === true) {
      var myModal = new window.bootstrap.Modal(this.modal, {
        backdrop: "static",
        keyboard: false,
      });

      myModal.show();
      this.body.style.paddingRight = "0";
      this.lightSwitch.style.opacity = "0";

      this.lightsOff.addEventListener("click", () => {
        localStorage.setItem("keepLightMode", "no");

        this.lightSwitch.style.opacity = "1";
      });

      this.lightsOn.addEventListener("click", () => {
        localStorage.setItem("keepLightMode", "yes");

        this.lightSwitch.removeChild(this.icon);
        this.lightSwitch.insertAdjacentHTML("afterbegin", this.moon);
        this.lightSwitch.style.opacity = "1";

        this.html.classList.remove("dark");
        this.html.classList.add("toggledLight");
      });
    }

    // Remember theme
    if (this.keepLights === "yes") {
      this.lightSwitch.removeChild(this.icon);
      this.lightSwitch.insertAdjacentHTML("afterbegin", this.moon);

      this.html.classList.remove("dark");
      this.html.classList.remove("toggledDark");
    }

    if (this.keepLights === "no") {
      this.lightSwitch.removeChild(this.icon);
      this.lightSwitch.insertAdjacentHTML("afterbegin", this.lightbulb);

      this.html.classList.remove("toggledLight");
    }
  }

  switchTheme() {
    // Toggle between dark/light mode
    let prefersLight = this.keepLights;

    if (prefersLight === "yes") {
      localStorage.setItem("keepLightMode", "no");

      this.lightSwitch.removeChild(this.icon);
      this.lightSwitch.insertAdjacentHTML("afterbegin", this.lightbulb);

      this.html.classList.remove("toggledLight");
      this.html.classList.add("toggledDark");
      this.html.classList.add("dark");
    }

    if (prefersLight === "no") {
      localStorage.setItem("keepLightMode", "yes");

      this.lightSwitch.removeChild(this.icon);
      this.lightSwitch.insertAdjacentHTML("afterbegin", this.moon);

      this.html.classList.remove("dark");
      this.html.classList.remove("toggledDark");
      this.html.classList.add("toggledLight");
    }
  }
}
