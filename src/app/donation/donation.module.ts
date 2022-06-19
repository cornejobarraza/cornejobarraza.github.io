import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { DonationRoutingModule } from "./donation-routing.module";
import { DonationComponent } from "./donation.component";

@NgModule({
  declarations: [DonationComponent],
  imports: [CommonModule, DonationRoutingModule, FormsModule, ReactiveFormsModule],
})
export class DonationModule {}
