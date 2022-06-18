import { Component, Input } from "@angular/core";

@Component({
  selector: "app-square",
  template: `
    <button class="btn btn-white" *ngIf="!value" aria-label="Empty square">{{ value }}</button>
    <button class="btn btn-white" *ngIf="value == 'X'" aria-label="Square with X">{{ value }}</button>
    <button class="btn btn-white" *ngIf="value == 'O'" aria-label="Square with O">{{ value }}</button>
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
      @media (pointer: coarse) {
        .btn-white:hover {
          opacity: 1;
          color: var(--headers);
          background-color: var(--secondary);
        }
        .btn-white:focus:hover {
          background-color: var(--secondary);
        }
      }
    `,
  ],
})
export class SquareComponent {
  @Input() value = "";
}
