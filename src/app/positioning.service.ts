import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { fromEvent, timer } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PositioningService {
  log: any = "";
  class: string = "d-none";
  initHeight: number = this.screenHeight;

  public renderer: Renderer2;

  constructor(private _renderer: RendererFactory2) {
    this.renderer = _renderer.createRenderer(null, null);
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
    return document.querySelector("#lightToggle");
  }

  get wrapper() {
    return document.querySelector("#topWrapper");
  }

  get appRoot() {
    return document.querySelector("app-root");
  }

  get footer() {
    return document.querySelector("footer");
  }

  toggleCheck() {
    fromEvent(window, "scroll").subscribe(() => {
      if (this.pixelsAway < 40) {
        this.renderer.setStyle(this.toggle, "margin-bottom", `${40 - this.pixelsAway}px`);
      } else {
        this.renderer.removeStyle(this.toggle, "margin-bottom");
      }
    });
  }

  footerCheck() {
    if (this.footer?.offsetTop === this.wrapper?.clientHeight && this.screenWidth > 1024) {
      this.renderer.setStyle(this.html, "height", "100%");
      this.renderer.setStyle(this.body, "height", "100%");
      this.renderer.setStyle(this.appRoot, "height", "100%");
      this.renderer.setStyle(this.toggle, "margin-bottom", "40px");
    }

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // We listen to the resize event
    fromEvent(window, "resize").subscribe(() => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);

      setTimeout(() => {
        if (this.pixelsAway < 1) {
          this.renderer.setStyle(this.toggle, "margin-bottom", "40px");
        }
      }, 1);

      if (this.footer?.offsetTop === this.wrapper?.clientHeight && this.screenWidth <= 1024) {
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
  }

  scrollToApp() {
    // Scrolling for some apps is handled by their own component once API requests are completed
    setTimeout(() => {
      document.querySelector("#apps")?.scrollIntoView({ block: "center" });
    }, 1);
  }
}
