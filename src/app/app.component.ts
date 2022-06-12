import { Component, OnInit } from "@angular/core";
import { UrlTree, DefaultUrlSerializer, UrlSerializer } from "@angular/router";
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

export class cleanUrlSerializer extends DefaultUrlSerializer {
  public override parse(url: string): UrlTree {
    function cleanUrl(url: string) {
      return url.replace(/\(|\)/g, ""); // for example to delete parenthesis
    }
    return super.parse(cleanUrl(url));
  }
}
