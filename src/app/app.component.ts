import { Component, HostListener, OnInit, Renderer2 } from "@angular/core";
import { GoodnightService } from "./goodnight.service";
import { PositioningService } from "./positioning.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "project-portfolio";
  currentPage!: number;

  constructor(
    public goodnight: GoodnightService,
    public positioning: PositioningService,
    private renderer: Renderer2
  ) {}

  get html() {
    return document.documentElement;
  }

  get page1() {
    return document.querySelector("#page-1") as HTMLElement;
  }

  get page2() {
    return document.querySelector("#page-2") as HTMLElement;
  }

  get page3() {
    return document.querySelector("#page-3") as HTMLElement;
  }

  @HostListener("window:resize", ["$event"])
  onScroll(event: Window) {
    let currentPage = this.currentPage;

    if (window.innerWidth > 576) {
      this.renderer.removeClass(this.page1, "active");
      this.renderer.removeClass(this.page1, "hidden");
      this.renderer.removeClass(this.page2, "active");
      this.renderer.removeClass(this.page2, "hidden");
      this.renderer.removeClass(this.page3, "active");
      this.renderer.removeClass(this.page3, "hidden");
    } else {
      if (currentPage === 1) {
        this.renderer.removeClass(this.page1, "hidden");
        this.renderer.addClass(this.page1, "active");
        this.renderer.removeClass(this.page2, "active");
        this.renderer.addClass(this.page2, "hidden");
        this.renderer.removeClass(this.page3, "active");
        this.renderer.addClass(this.page3, "hidden");
      }

      if (currentPage === 2) {
        this.renderer.removeClass(this.page1, "active");
        this.renderer.addClass(this.page1, "hidden");
        this.renderer.removeClass(this.page2, "hidden");
        this.renderer.addClass(this.page2, "active");
        this.renderer.removeClass(this.page3, "active");
        this.renderer.addClass(this.page3, "hidden");
      }
      if (currentPage === 3) {
        this.renderer.removeClass(this.page1, "active");
        this.renderer.addClass(this.page1, "hidden");
        this.renderer.removeClass(this.page2, "active");
        this.renderer.addClass(this.page2, "hidden");
        this.renderer.removeClass(this.page3, "hidden");
        this.renderer.addClass(this.page3, "active");
      }
    }
  }

  ngOnInit() {
    this.goodnight.defaultTheme();
    this.positioning.mobileHowTo();

    this.currentPage = 1;
  }

  onPointerDown(evt: any) {
    if (window.innerWidth < 576) {
      if (evt.clientX > window.innerWidth / 2) {
        this.html.style.setProperty("--translate-hidden", "100%");
      } else {
        this.html.style.setProperty("--translate-hidden", "-100%");
      }
    }
  }

  onSwipeLeft(evt: any) {
    if (window.innerWidth < 576) {
      let currentPage = this.currentPage;

      setTimeout(() => {
        if (currentPage === 1) {
          this.currentPage = 2;

          this.renderer.removeClass(this.page2, "hidden");
          this.renderer.addClass(this.page2, "active");

          this.renderer.removeClass(this.page1, "active");
          this.renderer.addClass(this.page1, "hidden");

          return;
        }

        if (currentPage === 2) {
          this.currentPage = 3;

          this.renderer.removeClass(this.page3, "hidden");
          this.renderer.addClass(this.page3, "active");

          this.renderer.removeClass(this.page2, "active");
          this.renderer.addClass(this.page2, "hidden");

          return;
        }
      }, 10);
    }
  }

  onSwipeRight(evt: any) {
    if (window.innerWidth < 576) {
      let currentPage = this.currentPage;

      setTimeout(() => {
        if (currentPage === 3) {
          this.currentPage = 2;

          this.renderer.removeClass(this.page2, "hidden");
          this.renderer.addClass(this.page2, "active");

          this.renderer.removeClass(this.page3, "active");
          this.renderer.addClass(this.page3, "hidden");

          return;
        }

        if (currentPage === 2) {
          this.currentPage = 1;

          this.renderer.removeClass(this.page1, "hidden");
          this.renderer.addClass(this.page1, "active");

          this.renderer.removeClass(this.page2, "active");
          this.renderer.addClass(this.page2, "hidden");

          return;
        }
      }, 10);
    }
  }
}
