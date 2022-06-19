import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceholderRoutingModule } from './placeholder-routing.module';
import { PlaceholderComponent } from './placeholder.component';


@NgModule({
  declarations: [
    PlaceholderComponent
  ],
  imports: [
    CommonModule,
    PlaceholderRoutingModule
  ]
})
export class PlaceholderModule { }
