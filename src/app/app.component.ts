import { Component, OnInit } from "@angular/core";
import { PositioningService } from "./positioning.service";
declare let goodNight: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "project-website";

  constructor(public position: PositioningService) {}

  ngOnInit() {
    goodNight();

    this.position.bottomCheck();
  }
}
