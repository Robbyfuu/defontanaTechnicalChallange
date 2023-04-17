import {
  Component,
  ViewChild,
  OnInit,
  EventEmitter,
  Output,
} from '@angular/core';
import {FormControl} from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonService } from '../../services';
import { Pokemon, SmallPokemon, TablePokemon } from 'src/interfaces';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import { AppState } from '../../store';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-pokemons-table',
  templateUrl: './pokemons-table.component.html',
  styleUrls: ['./pokemons-table.component.css'],
})
export class PokemonsTableComponent implements OnInit {
  myControl = new FormControl('');
  filteredOptions!: Observable<string[]>;
  displayedColumns: string[] = ['position', 'image', 'name'];
  pokemons: SmallPokemon[] = [];
  resultPokemons: TablePokemon[] = [];
  namesPokemons: string[] = [];
  dataSource = new MatTableDataSource<TablePokemon>(this.resultPokemons);
  pokemonSelected: {};
  pokemonByLetter: any;



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
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
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
          this.dataSource = new MatTableDataSource<TablePokemon>(
            this.resultPokemons.sort((a, b) => a.position - b.position)
          );
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      }
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
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    this.namesPokemons = this.resultPokemons.map((pokemon) => pokemon.name);
    return this.namesPokemons.filter(name => name.toLowerCase().includes(filterValue) );
  }
}
