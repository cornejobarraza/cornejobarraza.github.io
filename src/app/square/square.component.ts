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
        background: #e3e5e8;
      }
      .btn-white:hover {
        color: black;
        background-color: #e8e6e3;
      }
      .btn-white:focus {
        opacity: 1;
        background-color: #e3e5e8;
      }
    `,
  ],
})
export class SquareComponent {
  @Input() value = "";
}
