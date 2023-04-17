import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import { AppState } from '../../store';
import { PokemonService } from '../../services';
import { Pokemon, TablePokemon } from 'src/interfaces';

interface pokemonDetails {
  id: number;
  pokemonImg: string;
  name: string;
  height: number;
  weight: number;
  type?: string;
}

@Component({
  selector: 'app-pokemons-details',
  templateUrl: './pokemons-details.component.html',
  styleUrls: ['./pokemons-details.component.css'],
})
export class PokemonsDetailsComponent {
  pokemon: pokemonDetails = {
    id: 1,
    pokemonImg:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    name: 'Bulbasaur',
    height: 7,
    weight: 69,
    type: 'grass',
  };
  pokemonFavorite: any;
  constructor(
    private store: Store<AppState>,
    private pokemonService: PokemonService
  ) {
    this.store.select(fromStore.getState).subscribe((data) => {
      this.pokemonFavorite = data.pokemon.data.slice(-1).pop()!;
      this.pokemonService
        .getPokemonId(this.pokemonFavorite.position)
        .subscribe((data) => {
          this.pokemon = {
            id: data.id,
            pokemonImg: data.sprites.front_default,
            name: data.name,
            height: data.height,
            weight: data.weight,
            type: data.types[0].type.name,
          };
        });
    });
  }
}
