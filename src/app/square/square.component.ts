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
        height: 50px;
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
        color: var(--headers);
        background: var(--secondary);
      }
      .btn-white:hover {
        color: white;
        background-color: var(--tertiary);
      }
      .btn-white:focus {
        transition: none;
        background-color: var(--secondary);
      }
      .btn-white:focus:hover {
        opacity: 1;
        color: var(--headers);
        background-color: var(--secondary);
      }
      @media (pointer: fine) {
        .btn-white:focus:hover {
          color: white;
          background-color: var(--tertiary);
        }
      }
    `,
  ],
})
export class SquareComponent {
  @Input() value = "";
}
