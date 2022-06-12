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
        height: 20px;
        background: white;
      }
      #progress-bar {
        height: inherit;
        background-color: #198754;
        transition: width 0.75s;
      }
    `,
  ],
})
export class DonoBarComponent {
  @Input() progress: number = 0;
}
