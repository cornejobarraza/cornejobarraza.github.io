import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BoardComponent } from "./board/board.component";
import { DonoBarComponent } from "./dono-bar/dono-bar.component";
import { DonoBoxComponent } from "./dono-box/dono-box.component";
import { SquareComponent } from "./square/square.component";
import { ToDoComponent } from "./to-do/to-do.component";
import { JsonApiComponent } from "./json-api/json-api.component";
import { PokeApiComponent } from "./poke-api/poke-api.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: BoardComponent,
      },
      {
        path: "game",
        component: BoardComponent,
        children: [
          {
            path: "",
            component: SquareComponent,
          },
        ],
      },
      {
        path: "donation",
        component: DonoBoxComponent,
        children: [
          {
            path: "",
            component: DonoBarComponent,
          },
        ],
      },
      {
        path: "list",
        component: ToDoComponent,
      },
      {
        path: "placeholder",
        component: JsonApiComponent,
      },
      {
        path: "pokemon",
        component: PokeApiComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
