// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { fromEvent } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PositioningService {
  log: any = "";
  class: string = "d-none";

  public renderer: Renderer2;

  constructor(private _renderer: RendererFactory2) {
    this.renderer = this._renderer.createRenderer(null, null);
  }

  get html() {
    return document.documentElement;
  }

  get body() {
    return document.body;
  }

  get screenHeight() {
    return window.innerHeight;
  }

  get screenWidth() {
    return window.innerWidth;
  }

  get pixelsAway() {
    return this.html.scrollHeight - (window.scrollY + this.screenHeight);
  }

  get toggle() {
    return document.querySelector("#lightToggle") as HTMLElement;
  }

  get wrapper() {
    return document.querySelector("#topWrapper") as HTMLElement;
  }

  get appRoot() {
    return document.querySelector("app-root") as HTMLElement;
  }

  get footer() {
    return document.querySelector("footer") as HTMLElement;
  }

  setPosition() {
    let vh = window.innerHeight * 0.01;
    this.html.style.setProperty("--vh", `${vh}px`);

    if (this.footer.offsetTop === this.wrapper.clientHeight && this.screenWidth > 1024) {
      this.renderer.setStyle(this.html, "height", "100%");
      this.renderer.setStyle(this.body, "height", "100%");
      this.renderer.setStyle(this.appRoot, "height", "100%");
      this.renderer.setStyle(this.toggle, "margin-bottom", "40px");
    }

    fromEvent(window, "resize").subscribe(() => {
      let vh = window.innerHeight * 0.01;
      this.html.style.setProperty("--vh", `${vh}px`);

      setTimeout(() => {
        if (this.pixelsAway < 1) {
          this.renderer.setStyle(this.toggle, "margin-bottom", "40px");
        }
      }, 1);

      if (this.footer.offsetTop === this.wrapper.clientHeight && this.screenWidth <= 1024) {
        this.renderer.removeStyle(this.html, "height");
        this.renderer.removeStyle(this.body, "height");
        this.renderer.removeStyle(this.appRoot, "height");
        this.renderer.removeStyle(this.toggle, "margin-bottom");
      } else {
        this.renderer.setStyle(this.html, "height", "100%");
        this.renderer.setStyle(this.body, "height", "100%");
        this.renderer.setStyle(this.appRoot, "height", "100%");
        this.renderer.setStyle(this.toggle, "margin-bottom", "40px");
      }
    });

    fromEvent(window, "scroll").subscribe(() => {
      if (this.pixelsAway < 40) {
        this.renderer.setStyle(this.toggle, "margin-bottom", `${40 - this.pixelsAway}px`);
      } else {
        this.renderer.removeStyle(this.toggle, "margin-bottom");
      }
    });
  }
}
