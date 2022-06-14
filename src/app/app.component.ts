import { Component, OnInit, HostListener, Renderer2, ElementRef } from "@angular/core";
declare let goodNight: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "project-website";

  constructor(private renderer: Renderer2, private element: ElementRef) {}

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let maxScroll: number = document.documentElement.offsetHeight - window.innerHeight;
    let currentScroll: number = document.documentElement.scrollTop || document.body.scrollTop;
    let isAboveFooter: boolean = maxScroll - currentScroll < 40;

    const toggle = document.getElementById("lightToggle");

    if (isAboveFooter) {
      this.renderer.setStyle(toggle, "margin-bottom", "40px");
    }

    if (maxScroll === 0 || !isAboveFooter) {
      this.renderer.removeStyle(toggle, "margin-bottom");
    }
  }

  ngOnInit() {
    goodNight();
  }
}
