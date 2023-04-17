import * as fromPokemonReducer from './app.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AppState {
  pokemon: fromPokemonReducer.PokemonState;
}

export const reducers = {
  pokemon: fromPokemonReducer.pokemonReducer

};

export const getState = (state: AppState) => state;

export const getPokemonState = createFeatureSelector<fromPokemonReducer.PokemonState>('pokemon');
export const getPokemonsSelector = createSelector(getPokemonState, fromPokemonReducer.getPokemons);


