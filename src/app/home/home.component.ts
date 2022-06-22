import { Component, OnInit, AfterViewInit, Renderer2, HostListener } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { trigger, style, animate, transition } from "@angular/animations";
import { PositioningService } from "../positioning.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [
    trigger("fadeIn", [transition("* => *", [style({ opacity: 0 }), animate("0.25s ease", style({ opacity: 1 }))])]),
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {
  appName!: string;
  currentComponent!: string;
  currentPage!: number;

  constructor(
    private positioning: PositioningService,
    private router: Router,
    private route: ActivatedRoute,
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

  ngOnInit(): void {
    this.currentApp();

    this.currentPage = 1;

    if (window.innerWidth < 576) {
      this.renderer.addClass(this.page1, "active");
      this.renderer.addClass(this.page2, "hidden");
      this.renderer.addClass(this.page3, "hidden");
    }
  }

  ngAfterViewInit(): void {
    this.positioning.setPosition();
  }

  code1() {
    alert("Hello, World! 👋");
  }

  code2() {
    let userName = prompt("Hey! What's your name? 👀");

    if (userName === null || userName === "") return;

    // RegEx to match characters that are not letters or numbers
    let re = /[^A-Za-z0-9]/g;

    userName = String(userName);

    if (isNaN(userName as any) && !re.test(userName)) {
      userName = userName[0].toUpperCase() + userName.slice(1);
      alert("Hi " + userName + "!");
    } else {
      alert("Please enter a valid name and try again");
      this.code2();
    }
  }

  code3() {
    const userNum = prompt("Please enter a number #️⃣");

    if (userNum === null || userNum === "") return;

    let int = parseInt(userNum);

    if (!isNaN(int)) {
      let n = int;
      let result = (n * (n + 1)) / 2;

      alert("Your total is " + result);
    } else {
      alert("That's not a number, please try again");
      this.code3();
    }
  }

  code4() {
    let userInput = prompt("Your text goes here 🤓");

    // RegEx to match characters that are not letters or numbers
    let re = /[^A-Za-z0-9\s]/g;

    // Converts user input to a string
    let userWord = String(userInput);

    // Checks if user input are only spaces
    let amountOfSpaces = userWord.length - userWord.replace(/\s/g, "").length;

    // Do nothing if the dialog is closed or empty
    if (userInput === null || userInput === "") return;

    // Checks for palindrome or asks for input again if text is only spaces
    if (userWord.length !== amountOfSpaces && !re.test(userInput)) {
      function isPalindrome(str: string) {
        // This removes the spaces from the input
        str = str.toLowerCase().replace(re, "");

        // This determines the lenght of the input
        let len = str.length;

        // This loop checks if the first letter of the input is equal to the last one
        for (let i = 0; i < len / 2; i++) {
          if (str[i] !== str[len - 1 - i]) {
            return false;
          }
        }
        return true;
      }

      // Callback to isPalindrome function
      if (isPalindrome(userInput)) {
        alert('"' + userInput + '"' + " is a palindrome");
      } else {
        alert('"' + userInput + '"' + " is not a palindrome");
      }
    } else {
      alert("Non-valid text, please try again");
      this.code4();
    }
  }

  previousApp() {
    if (this.router.url === "/" || this.router.url === "/game") {
      this.appName = "PokeAPI";
      this.router.navigate(["pokemon"], { relativeTo: this.route });
    }

    if (this.router.url === "/pokemon") {
      this.appName = "Fake API";
      this.router.navigate(["placeholder"], { relativeTo: this.route });
    }

    if (this.router.url === "/placeholder") {
      this.currentComponent = "app-dono-box";
      this.appName = "Donation box";
      this.router.navigate(["donation"], { relativeTo: this.route });
    }

    if (this.router.url === "/donation") {
      this.currentComponent = "app-to-do";
      this.appName = "To-Do list";
      this.router.navigate(["list"], { relativeTo: this.route });
    }

    if (this.router.url === "/list") {
      this.currentComponent = "app-board";
      this.appName = "Tic-tac-toe";
      this.router.navigate(["game"], { relativeTo: this.route });
    }
  }

  nextApp() {
    if (this.router.url === "/" || this.router.url === "/game") {
      this.currentComponent = "app-to-do";
      this.appName = "To-Do list";
      this.router.navigate(["list"], { relativeTo: this.route });
    }

    if (this.router.url === "/list") {
      this.currentComponent = "app-dono-box";
      this.appName = "Donation box";
      this.router.navigate(["donation"], { relativeTo: this.route });
    }

    if (this.router.url === "/donation") {
      this.appName = "Fake API";
      this.router.navigate(["placeholder"], { relativeTo: this.route });
    }

    if (this.router.url === "/placeholder") {
      this.appName = "PokeAPI";
      this.router.navigate(["pokemon"], { relativeTo: this.route });
    }

    if (this.router.url === "/pokemon") {
      this.currentComponent = "app-board";
      this.appName = "Tic-tac-toe";
      this.router.navigate(["game"], { relativeTo: this.route });
    }
  }

  currentApp() {
    if (this.router.url === "/" || this.router.url === "/game") {
      this.appName = "Tic-tac-toe";
    }

    if (this.router.url === "/list") {
      this.appName = "To-Do list";
    }

    if (this.router.url === "/donation") {
      this.appName = "Donation box";
    }

    if (this.router.url === "/placeholder") {
      this.appName = "Fake API";
    }

    if (this.router.url === "/pokemon") {
      this.appName = "PokeAPI";
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

  onSwipe(evt: any) {
    if (window.innerWidth < 576) {
      let currentPage = this.currentPage;

      if (evt.deltaX < -40) {
        if (currentPage === 1) {
          this.currentPage = 2;

          this.renderer.removeClass(this.page2, "hidden");
          this.renderer.addClass(this.page2, "active");
          this.renderer.removeClass(this.page1, "active");
          this.renderer.addClass(this.page1, "hidden");
          this.renderer.removeClass(this.page3, "active");
          this.renderer.addClass(this.page3, "hidden");

          return;
        }

        if (currentPage === 2) {
          this.currentPage = 3;

          this.renderer.removeClass(this.page3, "hidden");
          this.renderer.addClass(this.page3, "active");
          this.renderer.removeClass(this.page2, "active");
          this.renderer.addClass(this.page2, "hidden");
          this.renderer.removeClass(this.page1, "active");
          this.renderer.addClass(this.page1, "hidden");

          return;
        }
      }

      if (evt.deltaX > 40) {
        if (currentPage === 3) {
          this.currentPage = 2;

          this.renderer.removeClass(this.page2, "hidden");
          this.renderer.addClass(this.page2, "active");
          this.renderer.removeClass(this.page3, "active");
          this.renderer.addClass(this.page3, "hidden");
          this.renderer.removeClass(this.page1, "active");
          this.renderer.addClass(this.page1, "hidden");

          return;
        }

        if (currentPage === 2) {
          this.currentPage = 1;

          this.renderer.removeClass(this.page1, "hidden");
          this.renderer.addClass(this.page1, "active");
          this.renderer.removeClass(this.page2, "active");
          this.renderer.addClass(this.page2, "hidden");
          this.renderer.removeClass(this.page3, "active");
          this.renderer.addClass(this.page3, "hidden");

          return;
        }
      }
    }
  }
}
