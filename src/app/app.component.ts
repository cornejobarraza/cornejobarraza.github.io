import { Component, OnInit, HostListener, Renderer2 } from "@angular/core";
declare let goodNight: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "project-website";

  constructor(private renderer: Renderer2) {}

  get toggle() {
    return document.querySelector("#lightToggle");
  }

  get footer() {
    return document.querySelector("footer");
  }

  get wrapper() {
    return document.querySelector("#topWrapper");
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let maxScroll: number = document.documentElement.offsetHeight - window.innerHeight;
    let currentScroll: number = document.documentElement.scrollTop || document.body.scrollTop;
    let positionY: number = maxScroll - currentScroll;
    let isAboveFooter: boolean = positionY < 40 || positionY === 0;

    if (isAboveFooter) {
      this.renderer.setStyle(this.toggle, "margin-bottom", "3.5rem");
    } else {
      this.renderer.setStyle(this.toggle, "margin-bottom", "1rem");
    }
  }

  ngOnInit() {
    goodNight();

    this.footerCheck();

    setInterval(() => {
      this.bottomCheck();
    }, 1000);
  }

  bottomCheck() {
    if (
      document.body.style.height === "" &&
      document.documentElement.scrollTop + window.innerHeight >= document.body.offsetHeight - 0.5
    ) {
      this.renderer.setStyle(this.toggle, "margin-bottom", "3.5rem");
    }
  }

  footerCheck() {
    if (this.footer?.offsetTop === this.wrapper?.clientHeight && window.innerWidth > 1024) {
      this.renderer.setStyle(document.documentElement, "height", "100%");
      this.renderer.setStyle(document.body, "height", "100%");
    }
  }
}
