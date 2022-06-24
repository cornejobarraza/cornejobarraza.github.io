import { Component, HostListener, OnInit, Renderer2 } from "@angular/core";
import { GoodnightService } from "./goodnight.service";
import { PositioningService } from "./positioning.service";
declare var window: any;

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

  get paragraphs() {
    return document.querySelectorAll("#aboutText > p");
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    let currentPage = this.currentPage;

    if (window.innerWidth > 576) {
      this.renderer.removeClass(this.page1, "hidden");
      this.renderer.removeClass(this.page2, "hidden");
      this.renderer.removeClass(this.page3, "hidden");
      this.renderer.removeClass(this.paragraphs[0], "hidden-textUp");
      this.renderer.removeClass(this.paragraphs[0], "hidden-textDown");
      this.renderer.removeClass(this.paragraphs[2], "hidden-textUp");
      this.renderer.removeClass(this.paragraphs[2], "hidden-textDown");
    } else {
      this.renderer.addClass(this.paragraphs[2], "hidden-textDown");
      this.renderer.removeClass(this.paragraphs[2], "hidden-textUp");
      this.renderer.removeStyle(this.paragraphs[2], "opacity");

      if (currentPage === 1) {
        this.renderer.removeClass(this.page1, "hidden");
        this.renderer.addClass(this.page2, "hidden");
        this.renderer.addClass(this.page3, "hidden");
      }

      if (currentPage === 2) {
        this.renderer.addClass(this.page1, "hidden");
        this.renderer.removeClass(this.page2, "hidden");
        this.renderer.addClass(this.page3, "hidden");
      }
      if (currentPage === 3) {
        this.renderer.addClass(this.page1, "hidden");
        this.renderer.addClass(this.page2, "hidden");
        this.renderer.removeClass(this.page3, "hidden");
      }
    }
  }

  ngOnInit() {
    this.goodnight.defaultTheme();
    this.mobileHowTo();

    this.currentPage = 1;
  }

  mobileHowTo() {
    if (window.innerWidth < 576) {
      let theme = localStorage.getItem("keepLightMode");

      if (theme === null) {
        var toastEl = document.querySelector(".toast");
        var myToast = new window.bootstrap.Toast(toastEl, { autohide: false });

        myToast.show();
      }
    }
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

          this.renderer.addClass(this.page1, "hidden");

          return;
        }

        if (currentPage === 2) {
          this.currentPage = 3;

          this.renderer.removeClass(this.page3, "hidden");

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

          this.renderer.addClass(this.page3, "hidden");

          return;
        }

        if (currentPage === 2) {
          this.currentPage = 1;

          this.renderer.removeClass(this.page1, "hidden");

          this.renderer.addClass(this.page2, "hidden");

          return;
        }
      }, 10);
    }
  }
}
