import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BoardComponent } from "./board/board.component";
import { DonoBarComponent } from "./dono-bar/dono-bar.component";
import { DonoBoxComponent } from "./dono-box/dono-box.component";
import { SquareComponent } from "./square/square.component";
import { ToDoComponent } from "./to-do/to-do.component";
import { JsonApiComponent } from "./json-api/json-api.component";
import { PokeApiComponent } from "./poke-api/poke-api.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    DonoBarComponent,
    DonoBoxComponent,
    SquareComponent,
    ToDoComponent,
    JsonApiComponent,
    PokeApiComponent,
    HomeComponent,
  ],
  imports: [AppRoutingModule, BrowserAnimationsModule, BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
