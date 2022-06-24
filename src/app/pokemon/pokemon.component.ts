import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.css"],
})
export class PokemonComponent implements OnInit {
  pkUrl!: string;
  pkNumber!: string | null;
  pkName!: string;

  constructor() {}

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

    this.pkUrl = `res/pkmn/${data.id}.png`;
    this.pkNumber = `Pokémon #${data.id}`;
    this.pkName = data.name.toUpperCase();
  }
}
