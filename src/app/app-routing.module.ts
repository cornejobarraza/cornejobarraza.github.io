import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "", loadChildren: () => import("./game/game.module").then((m) => m.GameModule) },
      { path: "game", loadChildren: () => import("./game/game.module").then((m) => m.GameModule) },
      { path: "list", loadChildren: () => import("./list/list.module").then((m) => m.ListModule) },
      { path: "donation", loadChildren: () => import("./donation/donation.module").then((m) => m.DonationModule) },
      {
        path: "placeholder",
        loadChildren: () => import("./placeholder/placeholder.module").then((m) => m.PlaceholderModule),
      },
      { path: "pokemon", loadChildren: () => import("./pokemon/pokemon.module").then((m) => m.PokemonModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
