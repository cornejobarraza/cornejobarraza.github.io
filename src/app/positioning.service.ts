import { Injectable, Renderer2, RendererFactory2, OnInit } from "@angular/core";
import { timer, fromEvent } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PositioningService implements OnInit {
  log!: any;
  class!: string;

  public renderer: Renderer2;

  constructor(private _renderer: RendererFactory2) {
    this.renderer = _renderer.createRenderer(null, null);
  }

  ngOnInit(): void {
    this.log = "";
    this.class = "d-none";
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

  get positionY() {
    return this.body.offsetHeight - (this.html.scrollTop + this.screenHeight);
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

  bottomCheck() {
    fromEvent(window, "scroll").subscribe(() => {
      let currentPosition = this.positionY;

      if (currentPosition < 40) {
        this.renderer.setStyle(this.toggle, "margin-bottom", "3.5rem");
      } else {
        this.renderer.setStyle(this.toggle, "margin-bottom", "1rem");
      }
    });

    timer(0, 100).subscribe(() => {
      let currentPosition2 = this.positionY;

      if (currentPosition2 < 1) {
        this.renderer.setStyle(this.toggle, "margin-bottom", "3.5rem");
      }
    });
  }

  footerCheck() {
    if (this.footer?.offsetTop === this.wrapper?.clientHeight && this.screenWidth > 1024) {
      this.renderer.setStyle(this.html, "height", "100%");
      this.renderer.setStyle(this.body, "height", "100%");
      this.renderer.setStyle(this.appRoot, "height", "100%");
      this.renderer.setStyle(this.toggle, "margin-bottom", "3.5rem");
    } else {
      this.renderer.removeStyle(this.html, "height");
      this.renderer.removeStyle(this.body, "height");
      this.renderer.removeStyle(this.appRoot, "height");
      this.renderer.setStyle(this.toggle, "margin-bottom", "1rem");
    }

    fromEvent(window, "resize").subscribe(() => {
      if (this.footer?.offsetTop === this.wrapper?.clientHeight && this.screenWidth < 1024) {
        this.renderer.removeStyle(this.html, "height");
        this.renderer.removeStyle(this.body, "height");
        this.renderer.removeStyle(this.appRoot, "height");
        this.renderer.setStyle(this.toggle, "margin-bottom", "1rem");
      } else {
        this.renderer.setStyle(this.html, "height", "100%");
        this.renderer.setStyle(this.body, "height", "100%");
        this.renderer.setStyle(this.appRoot, "height", "100%");
        this.renderer.setStyle(this.toggle, "margin-bottom", "3.5rem");
      }
    });
  }

  scrollTo(component: string) {
    // Scrolling for some apps is handled by their own component once API requests are completed
    setTimeout(() => {
      document.querySelector(component)?.scrollIntoView({ block: "center" });
    }, 100);
  }
}
