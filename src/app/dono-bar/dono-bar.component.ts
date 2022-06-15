import { Component, Input } from "@angular/core";

@Component({
  selector: "app-dono-bar",
  template: `
    <div id="progress">
      <div id="progress-bar" style="width: {{ progress }}%;"></div>
    </div>
  `,
  styles: [
    `
      #progress {
        height: 1.25rem;
        background: var(--secondary);
      }
      #progress-bar {
        height: inherit;
        background-color: #198754;
        transition: width 0.75s;
        box-shadow: inset 0 0 0.5em 0 #115c39;
      }
    `,
  ],
})
export class DonoBarComponent {
  @Input() progress: number = 0;
}
