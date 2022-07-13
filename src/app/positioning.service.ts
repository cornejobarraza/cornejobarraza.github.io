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

  get header() {
    return document.querySelector("header") as HTMLElement;
  }

  get main() {
    return document.querySelector("main") as HTMLElement;
  }

  get footer() {
    return document.querySelector("footer") as HTMLElement;
  }

  get customHeight() {
    let headerHeight = Number(getComputedStyle(this.header).getPropertyValue("height").split("px")[0]);
    let mainTopMargin = Number(getComputedStyle(this.main).getPropertyValue("margin-top").split("px")[0]);
    let mainBottomMargin = Number(getComputedStyle(this.main).getPropertyValue("margin-bottom").split("px")[0]);
    let footerHeight = Number(getComputedStyle(this.footer).getPropertyValue("height").split("px")[0]);

    return Math.round(window.innerHeight - headerHeight - mainTopMargin - mainBottomMargin - footerHeight);
  }

  get pixelsAway() {
    return this.html.scrollHeight - (window.scrollY + window.innerHeight);
  }

  get toggles() {
    return document.querySelector("#toggles") as HTMLElement;
  }

  setPosition() {
    this.renderer.setStyle(this.main, "min-height", this.customHeight + "px");
    this.renderer.removeClass(this.footer, "fixed-bottom");

    if (window.innerHeight === document.documentElement.scrollHeight) {
      this.renderer.setStyle(this.toggles, "margin-bottom", "40px");
    } else {
      this.renderer.removeStyle(this.toggles, "margin-bottom");
    }

    let initialHeight = this.main.clientHeight;

    fromEvent(window, "scroll", { passive: true }).subscribe(() => {
      if (this.pixelsAway < 40) {
        this.renderer.setStyle(this.toggles, "margin-bottom", `${40 - this.pixelsAway}px`);
      } else {
        this.renderer.removeStyle(this.toggles, "margin-bottom");
      }
    });

    fromEvent(window, "resize", { passive: true }).subscribe(() => {
      this.renderer.setStyle(this.main, "min-height", this.customHeight + "px");

      if (window.innerHeight === document.documentElement.scrollHeight) {
        this.renderer.setStyle(this.toggles, "margin-bottom", "40px");
      } else {
        this.renderer.removeStyle(this.toggles, "margin-bottom");
      }

      if (this.pixelsAway < 40) {
        this.renderer.setStyle(this.toggles, "margin-bottom", `${40 - this.pixelsAway}px`);
      } else {
        this.renderer.removeStyle(this.toggles, "margin-bottom");
      }

      if (this.pixelsAway < 1) {
        this.renderer.setStyle(this.toggles, "margin-bottom", "40px");
      }
    });

    var ro = new ResizeObserver((entries) => {
      const cr = entries[0].contentRect;

      if (cr.height !== initialHeight) {
        this.renderer.removeStyle(this.toggles, "margin-bottom");
      }

      if (this.pixelsAway < 40) {
        this.renderer.setStyle(this.toggles, "margin-bottom", `${40 - this.pixelsAway}px`);
      }
    });

    ro.observe(this.main);
  }
}
