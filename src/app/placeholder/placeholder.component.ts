import { Component, OnInit } from "@angular/core";
import { HomeComponent } from "../home/home.component";

@Component({
  selector: "app-placeholder",
  templateUrl: "./placeholder.component.html",
  styleUrls: ["./placeholder.component.css"],
})
export class PlaceholderComponent implements OnInit {
  title!: string;
  contents!: string[];
  turn!: number;
  cardNumber!: number;
  selectors: any[] = [
    {
      amount: 10,
      resource: "users",
      cardName: "Random user",
    },
    {
      amount: 500,
      resource: "comments",
      cardName: "Random comment",
    },
    {
      amount: 100,
      resource: "posts",
      cardName: "Random text",
    },
    {
      amount: 5000,
      resource: "photos",
      cardName: "Random photo",
    },
  ];

  constructor(private home: HomeComponent) {}

  ngOnInit(): void {
    this.turn = 0;
    this.getData(this.turn);
  }

  getData(turn: number) {
    this.contents = [];
    this.cardNumber = turn;

    const http = new XMLHttpRequest();
    const url =
      `https://jsonplaceholder.typicode.com/${this.selectors[turn].resource}/` +
      Math.floor(Math.random() * this.selectors[turn].amount + 1); // This makes the request random

    http.open("GET", url);
    http.send();

    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        const data = JSON.parse(http.responseText);

        if (turn === 0) {
          this.title = `👤 ${data.name}`;
          this.contents = [
            `🌐 ${data.website.toLowerCase()}`,
            `📧 ${data.email.toLowerCase()}`,
            `🏢 ${data.company.name}`,
          ];
        }

        if (turn === 1) {
          this.title = `💬 @${data.email.split("@")[0].toLowerCase()} says:`;
          this.contents = [data.body];
        }

        if (turn === 2) {
          this.title = `📝 Note #${data.id}`;
          this.contents = [data.body];
        }

        if (turn === 3) {
          this.title = `🎞 Picture #${data.id}`;
          this.contents = [data.thumbnailUrl];
        }

        this.home.scrollToApp();
      }
    };
  }

  get next() {
    return this.turn < 3 ? (this.turn += 1) : (this.turn = 0);
  }

  get previous() {
    return this.turn > 0 ? (this.turn -= 1) : (this.turn = 3);
  }
}
