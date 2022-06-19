import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { ListRoutingModule } from "./list-routing.module";
import { ListComponent } from "./list.component";
import { LongPressDirective } from "./long-press.directive";

@NgModule({
  declarations: [ListComponent, LongPressDirective],
  imports: [CommonModule, ListRoutingModule, FormsModule, ReactiveFormsModule],
})
export class ListModule {}
