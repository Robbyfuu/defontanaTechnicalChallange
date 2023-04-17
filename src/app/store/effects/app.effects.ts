import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as fromPokemonsActions from '../actions/pokemon.action';

import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { addPokemon } from '../actions/pokemon.action';

@Injectable()
export class PokemonEffects {
  constructor(private actions$: Actions) {}

  getPokemons$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fromPokemonsActions.GET_POKEMONS),
      switchMap((payload) => {
        return of({ type: 'GET_POKEMONS_SUCCESS', payload: [payload] });
      })
    )
  );
  AddPokemon$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fromPokemonsActions.ADD_POKEMON),
      switchMap((payload) => {
        return of({ type: 'ADD_POKEMON_SUCCESS', payload: payload });
      })
    )
  );
  DeletePokemon$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fromPokemonsActions.DELETE_POKEMON),
      switchMap((payload) => {
        return of({ type: 'DELETE_POKEMON_SUCCESS', payload: [payload] });
      })
    )
  );
  UpdatePokemon$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fromPokemonsActions.UPDATE_POKEMON),
      switchMap((payload) => {
        return of({ type: 'UPDATE_POKEMON_SUCCESS', payload: [payload] });
      })
    )
  );
}
