import { Component, OnInit } from "@angular/core";
declare let goodNight: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "project-website";

  ngOnInit() {
    goodNight();
  }
}
