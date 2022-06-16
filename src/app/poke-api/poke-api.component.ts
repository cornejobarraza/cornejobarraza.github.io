import { Component, OnInit } from "@angular/core";
import { PositioningService } from "../positioning.service";

@Component({
  selector: "app-poke-api",
  templateUrl: "./poke-api.component.html",
  styleUrls: ["./poke-api.component.css"],
})
export class PokeApiComponent implements OnInit {
  pkUrl!: string;
  pkNumber!: string | null;
  pkName!: string;

  constructor(private position: PositioningService) {}

  ngOnInit(): void {
    this.fetchPkmn(this.ranNum);
  }

  get ranNum() {
    return Math.floor(Math.random() * 251) + 1;
  }

  async fetchPkmn(id: number) {
    this.pkUrl = "";
    this.pkNumber = null;
    this.pkName = "";

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    this.pkUrl = `../res/pkmn/${data.id}.png`;
    this.pkNumber = `Pokémon #${data.id}`;
    this.pkName = data.name.toUpperCase();

    this.position.scrollTo("app-poke-api");
  }
}
