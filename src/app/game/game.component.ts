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
  xIsNext!: boolean;
  winner: string | null = null;
  tie: boolean | null = null;
  saveData!: string[];

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.savedGame();
  }

  newGame() {
    localStorage.removeItem("currentGame");

    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.tie = null;
  }

  savedGame() {
    let currentBoard: any = localStorage.getItem("currentGame");
    let currentGame = JSON.parse(currentBoard);

    if (currentBoard) {
      this.squares = currentGame;
      this.winner = this.calculateWinner();
      this.tie = this.calculateTie();
    } else {
      this.newGame();
    }
  }

  get player() {
    return this.xIsNext ? "X" : "O";
  }

  makeMove(idx: number) {
    if (!this.squares[idx] && !this.winner) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.saveData = this.squares;
    localStorage.setItem("currentGame", JSON.stringify(this.saveData));

    this.winner = this.calculateWinner();
    this.tie = this.calculateTie();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
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
