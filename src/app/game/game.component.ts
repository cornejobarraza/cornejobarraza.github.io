import { Component, OnInit, Renderer2 } from "@angular/core";
import { trigger, style, animate, transition } from "@angular/animations";
import { AnimationEvent } from "@angular/animations";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"],
  animations: [
    trigger("fadeIn", [transition(":enter", [style({ opacity: 0 }), animate("0.2s ease", style({ opacity: 1 }))])]),
    trigger("fadeOut", [transition(":leave", [style({ opacity: 1 }), animate("0.2s ease", style({ opacity: 0 }))])]),
  ],
})
export class GameComponent implements OnInit {
  squares: string[] = [];
  lines: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [8, 7, 6],
    [5, 4, 3],
    [2, 1, 0],
    [0, 3, 6],
    [6, 3, 0],
    [1, 4, 7],
    [7, 4, 1],
    [2, 5, 8],
    [8, 5, 2],
    [0, 4, 8],
    [8, 4, 0],
    [2, 4, 6],
    [6, 4, 2],
  ];
  position: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  savePosition!: number[];
  xIsNext!: boolean;
  winner: string | null = null;
  tie: boolean | null = null;

  constructor(private renderer: Renderer2) {}

  get player() {
    return this.xIsNext ? "X" : "O";
  }

  ngOnInit() {
    this.newGame();
  }

  progress() {
    this.savePosition = this.position;
    localStorage.setItem("currentPositions", JSON.stringify(this.savePosition));
  }

  newGame() {
    localStorage.removeItem("currentPositions");

    this.squares = Array(9).fill(null);
    this.position = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.xIsNext = Math.random() < 0.5;
    this.winner = null;
    this.tie = null;

    if (this.player === "O") {
      this.calculateMove();
    }
  }

  makeMove(idx: number) {
    if (!this.squares[idx] && this.player === "X") {
      this.squares[idx] = this.player;
      this.position = this.position.filter((position) => position !== idx);
      this.xIsNext = !this.xIsNext;

      this.calculateStrike();
      this.calculateBlock();
      this.progress();

      this.winner = this.calculateWinner();
      this.tie = this.calculateTie();
    }
  }

  calculateStrike() {
    setTimeout(() => {
      for (let i = 0; i < this.lines.length; i++) {
        const [a, b, c] = this.lines[i];

        if (!this.winner && !this.tie) {
          if (this.squares[a] === "O" && this.squares[a] === this.squares[b] && !this.squares[c]) {
            this.squares[c] = this.player;
            this.position = this.position.filter((position) => position !== c);
            this.xIsNext = !this.xIsNext;
            this.progress();
            break;
          } else {
            this.calculateMove();
          }

          if (this.squares[a] === "O" && this.squares[a] === this.squares[c] && !this.squares[b]) {
            this.squares[b] = this.player;
            this.position = this.position.filter((position) => position !== b);
            this.xIsNext = !this.xIsNext;
            this.progress();
            break;
          } else {
            this.calculateMove();
          }
        }
      }
      this.winner = this.calculateWinner();
      this.tie = this.calculateTie();
    }, 750);
  }

  calculateBlock() {
    setTimeout(() => {
      for (let i = 0; i < this.lines.length; i++) {
        const [a, b, c] = this.lines[i];

        if (!this.winner && !this.tie) {
          if (this.squares[a] && this.squares[a] === this.squares[b] && !this.squares[c]) {
            this.squares[c] = this.player;
            this.position = this.position.filter((position) => position !== c);
            this.xIsNext = !this.xIsNext;
            this.progress();
            break;
          }

          if (this.squares[a] && this.squares[a] === this.squares[c] && !this.squares[b]) {
            this.squares[b] = this.player;
            this.position = this.position.filter((position) => position !== b);
            this.xIsNext = !this.xIsNext;
            this.progress();
            break;
          }
        }
      }
      this.winner = this.calculateWinner();
      this.tie = this.calculateTie();
    }, 750);
  }

  calculateMove() {
    setTimeout(() => {
      if (this.player === "O" && !this.winner && !this.tie) {
        let random = Math.floor(Math.random() * this.position.length);
        let newIdx = this.position[random];

        this.squares[newIdx] = this.player;
        this.position = this.position.filter((position) => position !== newIdx);
        this.xIsNext = !this.xIsNext;

        this.progress();

        this.winner = this.calculateWinner();
        this.tie = this.calculateTie();
      }
    }, 750);
  }

  calculateWinner() {
    for (let i = 0; i < this.lines.length; i++) {
      const [a, b, c] = this.lines[i];
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[a];
      }
    }
    return null;
  }

  calculateTie() {
    const isBoardEmpty = this.squares.every((element) => element);

    if (!this.winner && isBoardEmpty === true) {
      return true;
    } else {
      return false;
    }
  }

  freezeBoard(event: AnimationEvent) {
    let squares = document.querySelectorAll("#board");

    for (let i: number = 0; i < squares.length; i++) {
      this.renderer.setStyle(squares[i], "pointer-events", "none");
    }
  }

  unfreezeBoard(event: AnimationEvent) {
    let squares = document.querySelectorAll("#board");

    for (let i: number = 0; i < squares.length; i++) {
      this.renderer.removeStyle(squares[i], "pointer-events");
    }
  }
}
