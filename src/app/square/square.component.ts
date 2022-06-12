import { Component, Input } from "@angular/core";

@Component({
  selector: "app-square",
  template: `
    <button class="btn btn-white" *ngIf="!value">{{ value }}</button>
    <button class="btn btn-white" *ngIf="value == 'X'">{{ value }}</button>
    <button class="btn btn-white" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: [
    `
      button {
        width: 100%;
        height: 60px;
        color: white;
        font-weight: bold;
        border-radius: 0;
        border: none !important;
        box-shadow: none !important;
      }
      button:focus {
        box-shadow: none;
      }
      .btn-white {
        color: black;
        background: #d5d8dd;
      }
      .btn-white:hover {
        color: black;
        background-color: #dddad5;
      }
      .btn-white:focus {
        opacity: 1;
        background-color: #d5d8dd;
      }
    `,
  ],
})
export class SquareComponent {
  @Input() value = "";
}
