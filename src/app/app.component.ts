import { Component, OnInit } from "@angular/core";
import { GoodnightService } from "./goodnight.service";
import { PositioningService } from "./positioning.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "project-portfolio";

  constructor(public goodnight: GoodnightService, public position: PositioningService) {}

  ngOnInit() {
    this.goodnight.defaultTheme();
    this.position.setPosition();
  }
}
