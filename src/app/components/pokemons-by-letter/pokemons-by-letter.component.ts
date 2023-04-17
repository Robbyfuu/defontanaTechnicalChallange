import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { PokemonService } from 'src/app/services';
import { AppState } from 'src/app/store';
import * as fromStore from '../../store';
import { SmallPokemon, TablePokemon } from 'src/interfaces';

interface pokemonByLetter {
  letter: string;
  numberOfTimes: number;
}

@Component({
  selector: 'app-pokemons-by-letter',
  templateUrl: './pokemons-by-letter.component.html',
  styleUrls: ['./pokemons-by-letter.component.css'],
})
export class PokemonsByLetterComponent {
  displayedColumns: string[] = ['letter', 'numberOfTimes'];
  pokemons: SmallPokemon[] = [];
  resultPokemons: TablePokemon[] = [];
  pokemonSelected: {};
  pokemonByLetter: pokemonByLetter[] = [];
  dataSource = new MatTableDataSource<any>(this.pokemonByLetter);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private pokemonService: PokemonService,
    private store: Store<AppState>
  ) {
    this.pokemonSelected = {};
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    let pokemonData: TablePokemon;
    this.pokemonService.getPokemons().subscribe((data) => {
      this.pokemons = data.results;
      for (let i = 0; i < this.pokemons.length; i++) {
        this.pokemonService.getPokemonId(i + 1).subscribe((data) => {
          pokemonData = {
            position: data.id,
            image: data.sprites.front_default,
            name: data.name,
          };
          this.resultPokemons.push(pokemonData);
        });
      }

      const pokemonCountByLetter: { [letter: string]: number } = {};
      this.pokemons.forEach((pokemon: SmallPokemon) => {
        const firstLetter = pokemon.name.charAt(0).toLowerCase();
        if (pokemonCountByLetter[firstLetter]) {
          pokemonCountByLetter[firstLetter]++;
        } else {
          pokemonCountByLetter[firstLetter] = 1;
        }
      });

      this.pokemonByLetter = Object.keys(pokemonCountByLetter).map((letter) => {
        return { letter, numberOfTimes: pokemonCountByLetter[letter] };
      });
      this.pokemonByLetter.sort((a, b) => {
        return a.letter.localeCompare(b.letter);
      });
      this.dataSource = new MatTableDataSource<any>(this.pokemonByLetter);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getRow(row: TablePokemon) {
    this.pokemonSelected = row;
    this.store.dispatch(fromStore.addPokemon(row));
  }
}
