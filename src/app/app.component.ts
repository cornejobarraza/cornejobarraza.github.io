import { Component, OnInit, Renderer2 } from "@angular/core";
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

  constructor(
    public goodnight: GoodnightService,
    public positioning: PositioningService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.goodnight.defaultTheme();
    this.mobileHowTo();
  }

  // Get elements
  get page1() {
    return document.querySelector("#page-1") as HTMLElement;
  }

  get page2() {
    return document.querySelector("#page-2") as HTMLElement;
  }

  get page3() {
    return document.querySelector("#page-3") as HTMLElement;
  }

  // Toast notification for mobile
  mobileHowTo() {
    if (window.innerWidth < 576) {
      let theme = localStorage.getItem("keepLightMode");

      if (theme === null || theme === "") {
        var toastEl = document.querySelector(".toast");
        var myToast = new window.bootstrap.Toast(toastEl, { autohide: false });

        myToast.show();

        localStorage.setItem("keepLightMode", "");
      }
    }
  }

  // Mobile swiping handlers
  onSwipeLeft(evt: any) {
    if (window.innerWidth < 576) {
      let currentPage = localStorage.getItem("currentPage");

      if (currentPage === "1") {
        localStorage.setItem("currentPage", "2");

        this.renderer.removeClass(this.page2, "hidden-left");
        this.renderer.addClass(this.page1, "hidden-right");

        return;
      }

      if (currentPage === "2") {
        localStorage.setItem("currentPage", "3");

        this.renderer.removeClass(this.page3, "hidden-left");
        this.renderer.addClass(this.page2, "hidden-right");

        return;
      }
    }
  }

  onSwipeRight(evt: any) {
    if (window.innerWidth < 576) {
      let currentPage = localStorage.getItem("currentPage");

      if (currentPage === "3") {
        localStorage.setItem("currentPage", "2");

        this.renderer.removeClass(this.page2, "hidden-right");
        this.renderer.addClass(this.page3, "hidden-right");

        return;
      }

      if (currentPage === "2") {
        localStorage.setItem("currentPage", "1");

        this.renderer.removeClass(this.page1, "hidden-right");
        this.renderer.removeClass(this.page3, "hidden-right");
        this.renderer.addClass(this.page2, "hidden-left");
        this.renderer.addClass(this.page3, "hidden-left");

        return;
      }
    }
  }
}
