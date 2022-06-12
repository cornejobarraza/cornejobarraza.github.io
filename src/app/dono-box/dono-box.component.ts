import { Component } from "@angular/core";
import { trigger, style, animate, transition } from "@angular/animations";
import { FormBuilder } from "@angular/forms";
import { AnimationEvent } from "@angular/animations";

@Component({
  selector: "app-dono-box",
  templateUrl: "./dono-box.component.html",
  styleUrls: ["./dono-box.component.css"],
  animations: [
    trigger("fadeIn", [transition(":enter", [style({ opacity: 0 }), animate("0.5s ease", style({ opacity: 1 }))])]),
    trigger("fadeInOut", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("0.2s ease", style({ opacity: 1 })),
        animate("0.2s 1000ms ease", style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class DonoBoxComponent {
  donated: number = 250;
  remaining: number | string = 750;
  plus: number | string = 0;
  goal: number = 1000;
  progress: number = 25;
  hasDonated: boolean = false;
  isInvalid: boolean = false;

  donationForm = this.formBuilder.group({
    amount: "50",
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    let amount = parseFloat(this.donationForm.value.amount);

    if (amount >= 0.01) {
      if (amount % 1 !== 0) {
        if (amount.toString().split(".")[1].length > 2) {
          this.isInvalid = true;
          return;
        }
      }

      this.donated += amount;

      if (this.donated % 1 !== 0) {
        this.remaining = (this.goal - this.donated).toFixed(2);
        this.plus = (this.donated - this.goal).toFixed(2);
      } else {
        this.remaining = this.goal - this.donated;
        this.plus = this.donated - this.goal;
      }

      this.hasDonated = true;
      this.donationForm.reset();
      this.updateProgress();
    } else {
      this.isInvalid = true;
    }
  }

  updateProgress(): void {
    let percent = ((this.donated * 1) / this.goal) * 100;

    if (percent <= 100) {
      this.progress = percent;
    } else {
      this.progress = 100;
    }
  }

  donationEnd(event: AnimationEvent) {
    this.hasDonated = false;
  }

  invalidEnd(event: AnimationEvent) {
    this.isInvalid = false;
  }
}
